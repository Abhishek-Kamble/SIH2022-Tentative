
module.exports.registration = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const transaction = await sequelize.transaction();

      var TE = `INSERT INTO property VALUES(${req.body.areacovered}, ${req.body.})`

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
    } catch (error) {
      reject({done: 0, message: "registration failed!!"});
    }
  })
}