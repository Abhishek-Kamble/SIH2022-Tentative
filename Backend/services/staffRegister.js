
exports.emailViaAWS_SES = function (req, res) {

  try {
    const oldUser = await UserLogin.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    //create one time link for resetting
    const token = jwt.sign({
      email: oldUser.email,
      id: oldUser._id
    }, process.env.SECRETE + oldUser.password, { expiresIn: "15m" });

    const link = `${process.env.SERVER_URL}/userlogin/reset-password/${oldUser._id}/${token}`;

    // console.log("Reset link", link);

    const mailBody = {
      "Destination": {
        "ToAddresses": [oldUser.email]
      },

      "Message": {
        "Body": {
          "Html": {
            "Charset": "UTF-8",
            "Data":
              ` 
<!doctype html>
<html lang="en-US">

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <title>Reset Password Email</title>
  <meta name="description" content="Reset Password Email Template.">
  <style type="text/css">
      a:hover {text-decoration: underline !important;}
  </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
  <!--100% body table-->
  <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
      style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
      <tr>
          <td>
              <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                  align="center" cellpadding="0" cellspacing="0">
                  <tr>
                      <td style="height:80px;">&nbsp;</td>
                  </tr>
                  
                  <tr>
                      <td>
                          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                              style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                              <tr>
                      <td style="text-align:center;">
                        <a href="http://www.alumni.wce.ac.in" title="logo" target="_blank">
                          <img width="80" src="https://wce-connects-img.s3.ap-south-1.amazonaws.com/wce75.png" title="WCE-Connects" alt="WCE-COnnects-logo">
                        </a>
                      </td>
                  </tr>
                  <tr>
                      <td style="height:20px;">&nbsp;</td>
                  </tr>
                              <tr>
                                  <td style="padding:0 35px;">
                                      <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                          requested to reset your password</h1>
                                      <span
                                          style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                        Dear <strong>${oldUser.name}</strong>, please click the link below to reset your account password.                                                                                                             
                                      </p>
                                      <a href="${link}"
                                          style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset Password</a>
                                    
                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:10;">                                          Please note that provided one-time password reset link is valid only for 15 Min.
                                      Please keep this message confidential, for any queries reach us at webmaster@walchandsangli.ac.in
                                      <br>
                                      <br>
                                      Thanks & Regards,
                                      <br>
                                      Admin,
                                      <br>
                                      WCE-Connects,
                                      <br>
                                      WCE, Sangli 416415
                                    </p>
                                  </td>
                              </tr>
                              
                              <tr>
                                <td>
                                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>Developed by Department of Computer Science and Engineering</strong></p>
                                </td>
                              </tr>
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  <tr>
                      <td style="height:20px;">&nbsp;</td>
                  </tr>
                  <tr>
                      <td style="text-align:center;">
                          <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.alumni.wce.ac.in</strong></p>                            
                      </td>
                  </tr>
                  <tr>
                      <td style="height:80px;">&nbsp;</td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
  <!--/100% body table-->
</body>

</html>
`

          },
          "Text": {
            "Charset": "UTF-8",
            "Data": "All rights reserved!"
          }
        },
        "Subject": {
          "Charset": "UTF-8",
          "Data": `Password reset link for your account`
        }
      }
    }
    req.mailBody = mailBody;
    await sendMail.emailViaAWS_SES(req, res)

    res.send('Password link sent to you........ ')

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong while creating link' });
    console.log("Error", error);
  }

}