const bcrypt = require('bcrypt')
const mysql = require('mysql2');
const DatabaseRepository = require('../../../services/DataBaseQuery')
const Sequelize = require('sequelize');

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}

var ValidateDatabase = async function(req) {
    return await new Promise(async (resolve,reject)=>{
        
        req.body.password=generatePassword(); 
        req.body.password = await bcrypt.hash(req.body.password, 12);  

        try{

            //check first name and last name
            let firstName=req.body.fname;
            let lastName=req.body.lname;
            if(firstName.length<1|lastName.length<1)
            {
                throw "name is invalid";
            }          
 
            //check email
            const mailID= req.body.email;
            if(!isEmailValid(mailID))
            {
                throw "email is invaid";
            }

            //check mobile number
            let mobNo=req.body.mobile_number;
            if(mobNo.toString().length!=10)
            {
                 throw "mobile number is invalid";
            } 
            
            var TE = 'SELECT COUNT(*) as cnt FROM employees where email=' + mysql.escape(mailID) + ' or mobile_number=' + mysql.escape(mobNo);

            var GetTERes = await DatabaseRepository.query(TE, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            console.log(GetTERes)
            if (GetTERes[0].cnt > 0) {
                throw "Email and Mobile number are already in use";
            }

            resolve();

        }catch(err){
            reject(err);
        }
    })
}

module.exports = ValidateDatabase;