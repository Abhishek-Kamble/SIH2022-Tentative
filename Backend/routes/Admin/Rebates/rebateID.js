const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery');

module.exports.rebateID = async function () {
  return await new Promise(async (resolve, reject) => {
    try {
      var TE = `SELECT COUNT(*) as cnt FROM rebates WHERE YEAR(added_date)=YEAR(CURDATE())`

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

      var id = (new Date()).getFullYear().toString() + (GetTERes[0].cnt + 1).toString();

      // console.log(id);
      resolve(id);

    } catch (error) {
      reject({done: 0, message: error.message})
    }
  })
}