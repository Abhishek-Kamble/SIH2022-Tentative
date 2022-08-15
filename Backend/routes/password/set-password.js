const Sequelize = require('sequelize');
const employees = require('../../models/employee')
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize
const mysql = require('mysql2');
require('dotenv').config();

module.exports.setPassword = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const password = req.body.password;

      const transaction = await sequelize.transaction();
      console.log(id, uid)
      var TE;
      if (id == 2) {
        TE = `SELECT * FROM employees WHERE employee_id=${uid}`
      } else if (id == 5) {
        TE = `SELECT * FROM users WHERE uid=${uid}`
      }

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      
      if(GetTERes.length > 0) {
        // update the employee isVerifed
        if(GetTERes[0].isVerified == 1){
          resolve({found:2, message: "Already Verified!"})
        }
        else if (id == 2) {
          TE = `UPDATE employees SET isVerified=1 WHERE employee_id=${uid}`
        } else if (id == 5) {
          TE = `UPDATE users SET isVerified=1 WHERE uid=${uid}`
        }
        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });
        
        resolve({found: 1, message:"Succefully Verified!"})
      } else {
        // no
        resolve({found: 0, message: "User doesn't exist!"});
      }
      console.log("GET TE res: ", GetTERes);

    } catch (error) {
      reject(error);
    }
  })
}