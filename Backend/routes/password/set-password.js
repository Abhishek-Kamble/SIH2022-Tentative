const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../../serviceHost').sequelize
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
require('dotenv').config();

module.exports.setPassword = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const transaction = await sequelize.transaction();
      // console.log(id, uid)
      var TE;
      if (req.body.id == 2) {
        TE = `SELECT * FROM employees WHERE employee_id=${req.body.uid}`
      } else if (req.body.id == 5) {
        TE = `SELECT * FROM users WHERE user_id=${req.body.uid}`
      }

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      var password = req.body.password.toString();
      const hashedPassword = await bcrypt.hash(password, 12);
      if(GetTERes.length > 0) {
        // update the employee isVerifed
        if(GetTERes[0].isVerified == 1){
          resolve({found:2, message: "Already Verified!"})
        }
        else if (req.body.id == 1 || req.body.id == 2) {
          TE = 'UPDATE employees SET password='+mysql.escape(hashedPassword)+',isVerified=1 WHERE employee_id='+mysql.escape(req.body.uid)
        } else if (id == 5) {
          TE = 'UPDATE users SET password='+mysql.escape(hashedPassword)+'isVerified=1 WHERE user_id='+mysql.escape(req.body.uid)
        }
        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });
        
        resolve({found: 1, message: "Succefully Updated Password!"})
      } else {
        // no
        resolve({found: 0, message: "User doesn't exist!"});
      }
      console.log("GET TE res: ", GetTERes);

    } catch (error) {
      console.log(error);
      reject(error);
    }
  })
}