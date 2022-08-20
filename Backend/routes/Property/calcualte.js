const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize
const mysql = require('mysql2');

require('dotenv').config();

const useProperty = [
  1, //Residential Purpose
  1, // Non residential public purpose | 
  2, // Non residential public utility 
  3, // Industry, entertainment and clubs 
  4, // Restaurants, hotels up to 2 star rating 
  10 // 3star and above hotels, towers, hoarding
]


const ConstructionType = [
  1.0,  // - RCC building (pucca )  
  1.0,  // - semi RCC building (semi pucca )
  0.6   // - non rcc building ( kuchcha )
]

const OccupancyType = [
  1.0, // - Self occupied
  2.0, // - Rented out 
  0.6 // - vacant plot 
]
//TODO: Complete Age Factor 
const ageFactor = function(data){
  
  return 1.0;
}

const taxrate = function(data,id){
  if(id == 1){
    return data[0].resendential_per;
  }else if(id == 2){
    return data[0].commercial_per;
  }
  return data[0].industrial_per;
}

module.exports.calcualte = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {

      // To get Property Values
      var uid = req.decoded.id;
      TE = 'SELECT * FROM properties WHERE user_id=' + mysql.escape(uid) + ' and property_id=' + mysql.escape(req.body.property_id);
      var PropertyData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      console.log("Property Data", PropertyData)
      
      // To get Zone Data
      TE1 = 'SELECT * FROM zones WHERE zone_id=' + mysql.escape(PropertyData[0].zone_id);
      var ZoneData = await DatabaseRepository.query(TE1, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      console.log("Zone Data", ZoneData)
      
      // Calculate Property Values
      var PropertyValue = PropertyData[0].areacovered * ageFactor(PropertyData[0].yearconstruction) * useProperty[(PropertyData[0].use-1)] * ConstructionType[(PropertyData[0].constructortype-1)] * OccupancyType[PropertyData[0].occupancytype-1] * ZoneData[0].uav;

      // Calcualte Tax Value
      var Tax = PropertyValue*taxrate(ZoneData,PropertyData[0].type)/100;

      // Reduce Rebates
      //TODO: complete Rebates for different vaules.

      resolve({ done: 1, PropertyValue: PropertyValue,tax:Tax,data: PropertyData });
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "something is wrong!!" });
    }
  })
}