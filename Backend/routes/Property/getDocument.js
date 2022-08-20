const s3handler = require('../../services/s3handler');

module.exports.get_document = async function (req) {
  return await new Promise (async(resolve, reject) => {
    try {
      const fileData = {
        key: req.params.docId, //folder facility to years
      }
      const result = s3handler.downloader(fileData);
      resolve(result);
    } catch (error) {
      reject({done: 0, message: "Error: " + error})
    }
  })
}