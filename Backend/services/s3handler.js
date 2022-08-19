const s3Service = require('./s3');

const uploader = async function (fileData) {
  return await new Promise(async (resolve, reject) => {
    try {
      const docId =  (Date.now()).toString() + (Math.floor(Math.random()*10000)).toString();
      const objectData = {
        body: fileData.binary,
        key: docId + fileData.docFormat
      }
      const link = s3Service.uploadObject(objectData);

      if(link.done === 0){
        reject({done: 0, message:"Error while uploading docuent!"})
      }else{
        resolve(docId + fileData.docFormat);
      }
      
    } catch (error) {
      reject({done: 0, message: error.message})
    }
  })
}

const downloader = async function (fileData) {
  return await new Promise(async (resolve, reject) => {
    try {
      const objectData = { key: fileData.key }

      const link = await s3Service.downloadObject(objectData);

      resolve(link.objURL);
      
    } catch (error) {
      reject({done: 0, message: "Error in S3 handler " + error})
    }
  })
}

const deleter = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const objectData = {
        key:req.body.key
      }

      const link = s3Service.deleteObject(objectData);

      if(link.done === 0){
        resolve({done: 0, message:"Error while"});
      }else{
        resolve({done: 1, message: "object deleted successfully"});
      }
    } catch (error) {
      reject({done: 0, message: error.message})
    }
  })
}

module.exports.uploader = uploader;
module.exports.downloader = downloader;
module.exports.deleter = deleter;