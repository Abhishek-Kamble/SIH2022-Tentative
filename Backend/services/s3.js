require("dotenv").config()
const aws = require('aws-sdk')

aws.config.update({
  secretAccessKey: process.env.s3secretAccessKey,
  accessKeyId: process.env.s3accessKeyId,
  region: process.env.region,
});

const BUCKET = process.env.s3privateBucket;
const s3 = new aws.S3();

const downloadObject = async function (objectData) {
  return await new Promise( async (resolve, reject) => {
    try {
      const url = await s3.getSignedUrlPromise('getObject', {
        Bucket: BUCKET,
        Key: objectData.key,
        Expires: 300
      });
      resolve({ done: 1, objURL: url});
    } catch (error) {
      console.log(error)
      reject({ done: 0, message: "Error in master S3 " + error })
    }
  })
}

//upload objects to private s3 bucket
const uploadObject = async function (objectData) {
  return await new Promise(async (resolve, reject) => {
    try {
      await s3.putObject({
        Body: objectData.body,
        Bucket: BUCKET,
        Key: objectData.key,
        Expires: 300
      }, function (err, data) {
        if (err) {
          console.log(err, err.stack);
          resolve({ done: 0, message: "Error while uploading to S3 bucket." })
        }
        else console.log(data);
        resolve({ done: 1, data})
      })
        .promise();
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "Error while uploading object" });
    }
  })
}

const deleteObject = async function (objectData) {
  return await new Promise(async (resolve, reject) => {
    try {
      await s3.deleteObject({
        Bucket: BUCKET,
        Key: objectData.key,
        Expires: 300
      }, function (err, data) {

        if (err) {
          console.log(err, err.stack);
          resolve({ done: 0, message: "Error while deleting object from S3." });
        }
        else {
          console.log(data);
          resolve({ done: 1, data })
        }      
      }).promise();
    } catch (error) {
      console.log("Error: ", error);
      reject({ done: 0, message: "Error occurred while deleting object from S3." });
    }
  })
}

module.exports.downloadObject = downloadObject;
module.exports.uploadObject = uploadObject;
module.exports.deleteObject = deleteObject;
