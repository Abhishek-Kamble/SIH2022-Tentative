const jwt = require('jsonwebtoken');
require('dotenv').config();

const GenerateJWTToken = async function(tokenData) {

    return await new Promise( async (resolve, reject) => {
        try {
            var token = jwt.sign(
                tokenData,
                process.env.secretAccessKey,
                { expiresIn: process.env.jwt_expiry_days },
            );

            console.log("JWT Token: " + token);

            resolve(token);

        } catch (err) {
            reject(err);
        }
    });
};

//Export
module.exports.GenerateJWTToken = GenerateJWTToken;
