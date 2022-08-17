const Sequelize = require('sequelize');
const users = require('../../../models/user')
const DatabaseRepository = require('../../../services/DataBaseQuery')
const sequelize = require('../.../../../../serviceHost').sequelize
require('dotenv').config();


register = async function(req) {
    return await new Promise( async (resolve, reject) =>{
        try {
            var today = new Date();
            var yyyy = today.getFullYear();
            const transaction = await sequelize.transaction();
            
            // to get count        
            var TE = 'SELECT COUNT(*) as cnt FROM users'
                
            var GetTERes = await DatabaseRepository.query(TE,{
                replacement :[], type : Sequelize.QueryTypes.SELECT });
            

            req.body.user_id = parseInt(yyyy.toString() + "5" + (GetTERes[0].cnt + 1).toString())

            /* To Add Data */

            var userD = req.body;
            
            const userData = DatabaseRepository.insertOne(users,userD,null,transaction);
            
            // send email function

            req.email = req.body.email;
            req.name = req.body.name;
            req.activationLink = process.env.api + '/verification?id=5&uid=' + req.body.user_id;
            // staffRegistrationEmail(req)

            //resolve email
            // console.log(userData)
            
            resolve(userD);

        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}

module.exports.register = register