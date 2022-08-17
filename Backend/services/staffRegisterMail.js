const emailService = require('./email')
module.exports.staffRegistrationEmail = async function (req) {
  return await new Promise( async (resolve, reject) => {
    try {

      const mailBody = {
        "Destination": {
          "ToAddresses": [req.email]
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
                  <title>Staff Registration Email</title>
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
                                        <a href="http://localhost:3000" title="logo" target="_blank">
                                          <img width="120" src="https://s3-nodejs-testing.s3.ap-south-1.amazonaws.com/DataConquerorsLogo.png" title="MTFMS" alt="WCE-COnnects-logo">
                                        </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height:20px;">&nbsp;</td>
                                  </tr>
                                              <tr>
                                                  <td style="padding:0 35px;">
                                                      <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Activate your staff account.</h1>
                                                      <span
                                                          style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                        Dear <strong>${req.name}</strong>, please click the link below to reset your account password.                                                                                                             
                                                      </p>
                                                      <a href="${req.activationLink}"
                                                          style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Activate Account and Set Password</a>
                                                    
                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:10;">                                          Please note that provided one-time password reset link is valid only for 15 Min.
                                                      Please keep this message confidential, for any queries reach us at abhishek.kamble@walchandsangli.ac.in
                                                      <br>
                                                      <br>
                                                      Thanks & Regards,
                                                      <br>
                                                      Admin,
                                                      <br>
                                                      Munciple Tax and Finance management sysstem
                                                    </p>
                                                  </td>
                                              </tr>
                                              
                                              <tr>
                                                <td>
                                                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>Developed by Data_Conquerors</strong></p>
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
                                          <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>2022 Data_Conquerors</strong></p>                            
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
            "Data": `Staff account activation`
          }
        }
      }
      req.mailBody = mailBody;
      await emailService.emailViaAWS_SES(req)
  
      resolve("Email Sent successfully")
  
    } catch (error) {
      console.log(error);
      reject("Something went wrong!!");
    }
  })
}