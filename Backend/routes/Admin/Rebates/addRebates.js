const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')
const rebateID = require('./rebateID').rebateID;

module.exports.add = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        const transaction = await sequelize.transaction();

        const rebate_id = await rebateID();

        const Data = {
          "rebate_id": rebate_id,
          "rebate_name": req.body.rebate_name,
          "discount_per": req.body.discount_per,
          "rebate_discription": req.body.rebate_discription,
          "added_date": new Date().toJSON().slice(0, 19).replace('T', ' '),
          "start_date": req.body.start_date,
          "end_date": req.body.end_date
        }

        const rebateData = await DatabaseRepository.insertOne(rebates, Data, null, transaction);

        console.log("Rebate Data: ", rebateData);

        resolve({ done: 1, mesage: "Rebate data inserted into DB!" });
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}