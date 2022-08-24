const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')
require('dotenv').config();

module.exports.details = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      TE = 'SELECT * FROM zones';
      var ZoneData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
    //   console.log(PropertyData)
      resolve({ done: 1, data: ZoneData});
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "something is wrong!!" });
    }
  })
}