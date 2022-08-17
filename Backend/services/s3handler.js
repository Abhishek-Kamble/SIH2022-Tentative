const s3Service = require('./s3');

const uploader = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const docId = new Date() + Math.random();
      const objectData = {
        body: req.body.binary,
        key: docId
      }
      const link = s3Service.uploadObject(objectData);

      if(link.done === 0){
        resolve({done: 0, message:"Error while uploading docuent!"})
      }else{
        resolve({dockey: docId});
      }
      
    } catch (error) {
      reject({done: 0, message: error.message})
    }
  })
}

const downloader = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const objectData = {
        key: req.body.key
      }

      const link = s3Service.downloadObject(objectData);

      if(link.done === 0){
        resolve({done: 0, message:"Error while downloading"})
      }else{
        resolve(link);
      }

    } catch (error) {
      reject({done: 0, message: error.message})
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