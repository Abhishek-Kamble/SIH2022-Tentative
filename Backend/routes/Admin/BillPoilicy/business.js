const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize

module.exports.updateBillPolicy = async(req)=>{
  return await new Promise (async (resolve, reject) => {
    try {
      
    } catch (error) {
      reject({done: 0, message: error})
    }
  })
}