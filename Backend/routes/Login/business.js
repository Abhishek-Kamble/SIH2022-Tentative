const Sequelize = require('sequelize');
const DatabaseRepository = require('../../services/DataBaseQuery')
const sequelize = require('../.../../../serviceHost').sequelize
const mysql = require('mysql2');
const GenerateJWTToken = require('../../middleware/TokenGenerator').GenerateJWTToken
require('dotenv').config();

module.exports.login = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const id = req.query.id;
      const email = req.body.email;

      console.log(id)
      var TE;
      if (id == 2) {
        TE = 'SELECT * FROM employees WHERE email='+mysql.escape(email);
      } else {
        if (id == 5) {
        TE = 'SELECT * FROM users WHERE email='+mysql.escape(email);
        }else {
            reject("Invalid Id");
        }
      }

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
      if(GetTERes.length > 0) {
        if(GetTERes[0].isVerified != 1){
            resolve({found:0,message:"Please Verify Account",token:0});
            return;
        }
        // TODO: Implemnt Bcrypt
        if(GetTERes[0].password == req.body.password) {
            var Token = await GenerateJWTToken({userid:req.body.email,password:req.body.password});

            resolve({found: 1, message:"Succefully Logged in!",token: Token});
        } else {
            resolve({found: 0, message:"Invalid Password"});
        }
       
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