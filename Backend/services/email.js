const AWS = require("aws-sdk");
const config = require('config');
require('dotenv').config();

exports.emailViaAWS_SES = async function (req) {
    return await new Promise(async (resolve, reject) => {
        try {
            console.log(process.env.secretAccessKey, process.env.region);
            AWS.config.update({
                accessKeyId: process.env.accessKeyId,
                secretAccessKey: process.env.secretAccessKey,
                region: process.env.region
            });

            const ses = new AWS.SES({ apiVersion: "2010-12-01" });

            const params = {
                ...req.mailBody,
                Source: "'Munciple Tax and Finance Mnagement System' <" + process.env.SenderEmailId + ">'"
            };

            const sendEmailReceiver = ses.sendEmail(params).promise();

            sendEmailReceiver
                .then(data => {
                    console.log("Email submitted to SES", data);
                    resolve(data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error)
                });

        } catch (err) {
            console.log(err);
            reject(err);
        }
    })

}