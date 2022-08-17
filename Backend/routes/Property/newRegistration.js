const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize
const propertyID = require('./propertyId').propertyid
require('dotenv').config();

module.exports.registration = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const transaction = await sequelize.transaction();

      const property_id = propertyID;

      var TE = `INSERT INTO property(propertyID, areacovered, yearconstruction, zone_id, user_id, use, constructortype, occupancytype, type) 
      VALUES(${req.body.propertyID}, ${req.body.areacovered}, ${req.body.yearconstruction}, ${req.body.zone_id}, ${req.body.user_id}, ${req.body.use}, ${req.body.constructortype}, ${req.body.occupancytype}, ${req.body.type})`;

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.INSERT_ONE });

      console.log(GetTERes);

      resolve({done: 1, mesage: "Data inserted into DB!"});
    } catch (error) {
      reject({done: 0, message: "registration failed!!"});
    }
  })
}