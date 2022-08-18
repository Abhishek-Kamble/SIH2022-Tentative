const employee=require('../../models/employee');
const Sequelize = require('sequelize');
const employees = require('../../models/employee');
const sequelize = require('../serviceHost').sequelize
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
            //TODO => to check mail id is present in user table 
            if(isEmailValid(mailID))
            {
                employees.findAll({
                    where:{
                        email:mailID
                    }
                }).then(result=>{
                   
                    if(result.length>0)
                   {
                        console.log("email already present in database");
                        throw "email already present in database";
                   } 
                 
                }).catch(err=>{
                    console.log(err);
                })
            }

            //check mobile number
            let mobNo=req.body.mobile_number;
            if(mobNo.toString().length!=10)
            {
                 throw "mobile number is invalid";
            }  

            resolve();

        }catch(err){
            reject(err);
        }
    })
}

module.exports = ValidateDatabase;