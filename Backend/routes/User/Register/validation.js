var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
var DatabaseRepository = require('./../../../services/DataBaseQuery')
const Sequelize = require('sequelize');
const mysql = require('mysql2');

function isEmailValid(email) {
    if (!email)
        return false;

    if (email.length > 254)
        return false;

    var valid = emailRegex.test(email);
    if (!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if (parts[0].length > 64)
        return false;

    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part) { return part.length > 63; }))
        return false;

    return true;
}

var ValidateDatabase = async function (req) {
    return await new Promise(async (resolve, reject) => {
        try {

            //check details
            let name = req.body.name;
            if (name.length < 2) {
                throw "Name is invalid";
            }

            if (req.body.home_address.length < 5) {
                throw "Address is not valid";
            }


            //check email
            const mailID = req.body.email;
            if (!isEmailValid(mailID)) {
                throw "email is invaid";
            }
            //check mobile number
            let mobNo = req.body.mobile_number;
            if (mobNo.toString().length != 10) {
                throw "mobile number is invalid";
            }


            var TE = 'SELECT COUNT(*) as cnt FROM users where email=' + mysql.escape(mailID) + ' or mobile_number=' + mysql.escape(mobNo);

            var GetTERes = await DatabaseRepository.query(TE, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            console.log(GetTERes)
            if (GetTERes[0].cnt > 0) {
                throw "Email and Mobile number are already in use";
            }


            resolve();

        } catch (err) {
            console.log(err);
            reject(err);
        }
    })
}

module.exports = ValidateDatabase;