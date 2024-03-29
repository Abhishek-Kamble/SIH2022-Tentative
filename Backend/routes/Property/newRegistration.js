const DatabaseRepository = require('../../services/DataBaseQuery')
const Sequelize = require('sequelize')
const sequelize = require('../../serviceHost').sequelize
const propertyID = require('./propertyId').propertyid
const s3Handler = require('../../services/s3handler')
const property = require('../../models/property')
const landData = require('./land-data')
const registrationMail = require('./registration-email')

require('dotenv').config();

module.exports.registration = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const transaction = await sequelize.transaction();

      const property_id = await propertyID(req.body.zone_id);
      
      // const affidavitDocID = await s3Handler.uploader({
      //   binary: req.body.affidavitBinary, 
      //   docFormat: req.body.affidavitFormat
      // });

      // const applicationDocID = await s3Handler.uploader({
      //   binary: req.body.applicationBinary, 
      //   docFormat: req.body.applicationFormat
      // });

      // const droneData = landData[0];
      // console.log(droneData);
      Data = {
        "property_id": property_id,
        "land_number": req.body.land_number,
        "areacovered": req.body.area * req.body.floors,  // calculated by drone
        "area": req.body.area,
        "floors": req.body.floors,
        "yearconstruction": new Date().toJSON().slice(0, 19).replace('T', ' '),//TODO: after frontend completed change it
        "zone_id": req.body.zone_id,
        "user_id": req.body.user_id.toString(),
        "use": req.body.use,
        "constructortype": req.body.constructortype,
        "occupancytype": req.body.occupancytype,
        "type": req.body.type,
        "property_address": req.body.property_address,
        "Registration_date":new Date().toJSON().slice(0, 19).replace('T', ' '),
      }

      const PropertyData = await DatabaseRepository.insertOne(property,Data,null,transaction);
      
      // console.log(PropertyData);

      var TE = `SELECT * FROM users WHERE user_id = ${req.body.user_id}`;

      GetTERes = await DatabaseRepository.query(TE,{
        replacement :[], type : Sequelize.QueryTypes.SELECT });

      req.email = GetTERes[0].email;
      req.name = GetTERes[0].name;
      req.property_id = property_id;

      await registrationMail.propertyRegistrationEmail(req);

      resolve({ done: 1, mesage: "Data inserted into DB!" });
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "registration failed!!" });
    }
  })
}