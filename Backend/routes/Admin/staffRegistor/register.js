const Sequelize = require('sequelize');
const employees = require('../../../models/employee')
const DatabaseRepository = require('../../../services/DataBaseQuery')
const sequelize = require('../.../../../../serviceHost').sequelize
require('dotenv').config();
const staffRegistrationEmail = require('../../../services/staffRegisterMail').staffRegistrationEmail

register = async function(req) {
    return await new Promise( async (resolve, reject) =>{
        try {
            var today = new Date();
            var yyyy = today.getFullYear();
            const transaction = await sequelize.transaction();
            
            // to get count        
            var TE = 'SELECT COUNT(*) as cnt FROM employees'
                
            var GetTERes = await DatabaseRepository.query(TE,{
                replacement :[], type : Sequelize.QueryTypes.SELECT });
            

            req.body.employee_id = parseInt(yyyy.toString() + "2" + (GetTERes[0].cnt + 1).toString())

            /* To Add Data */

            var employeeD = {
                "fname":req.body.fname,
                "lname":req.body.lname,
                "mobile_number":req.body.mobile_number.toString(),
                "email":req.body.email,
                "password":req.body.password,
                "isVerified":false,
                "role":2,
                "employee_id":req.body.employee_id,
            };
            // console.log("---------",employeeD.mobile_number);
            
            const EmployeeData = DatabaseRepository.insertOne(employees,employeeD,null,transaction);
            
            // send email function

            req.email = req.body.email;
            req.name = req.body.fname + ' ' + req.body.lname;
            req.activationLink = process.env.api + '/verification?id=2&uid=' + req.body.employee_id;
            staffRegistrationEmail(req)

            //resolve email
            
            resolve(employeeD);

        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}

module.exports.register = register