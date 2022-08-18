const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize
const mysql = require('mysql2');

require('dotenv').config();

module.exports.details = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      var uid = req.decoded.id;
      TE = 'SELECT * FROM properties WHERE user_id='+mysql.escape(uid);
      var PropertyData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
    //   console.log(PropertyData)
      resolve({ done: 1, data: PropertyData});
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "something is wrong!!" });
    }
  })
}