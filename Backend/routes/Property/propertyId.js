const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize

module.exports.propertyid = async function (data) {
  return await new Promise(async (resolve, reject) => {
    try {
      var TE = `SELECT COUNT(*) as cnt FROM properties WHERE YEAR(Registration_date)=YEAR(CURDATE())`

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      console.log(GetTERes);
      var id = (new Date()).getFullYear().toString() + data.toString() + (GetTERes[0].cnt + 1).toString();
      console.log(id);
      resolve(id);

    } catch (error) {
      reject({done: 0, message: error.message})
    }
  })
}