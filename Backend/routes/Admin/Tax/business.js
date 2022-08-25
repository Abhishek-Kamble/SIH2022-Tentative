const Sequelize = require('sequelize');
const taxrate = require('../../../models/tax');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize

gettaxrate = async (req) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `SELECT * FROM taxes`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

        resolve({ done: 1, data: GetTERes[0] })
      }
    } catch (error) {
      reject({ done: 0, message: error })
    }
  })
}

addtaxrate = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        const transaction = await sequelize.transaction();

        // const Data = {
        //   "policy_type": req.body.policy_type,
        //   "policy_year": req.body.policy_year,
        //   "residential_taxes_general_per": req.body.residential_taxes_general_per,
        //   "water_benefit_task_per": req.body.water_benefit_task_per,
        //   "sewarage_tax_per": req.body.sewarage_tax_per,
        //   "sewarage_benefit_tax_per": req.body.sewarage_benefit_tax_per,
        //   "education_cess_per": req.body.education_cess_per,
        //   "tree_cess_per": req.body.tree_cess_per,
        //   "stree_tax_per": req.body.stree_tax_per,
        //   "employment_guarantee_per": req.body.employment_guarantee_per,
        //   "fire_tax_per": req.body.fire_tax_per,
        //   "discount": req.body.discount
        // }
        const Data = {
          "tax_id": req.body.tax_id,
          "tax_name": req.body.tax_name,
          "taxrate": req.body.taxrate,
        }

        const policyData = await DatabaseRepository.insertOne(taxrate, Data, null, transaction);
        console.log(policyData)
        resolve({ done: 1, mesage: "Tax data inserted into DB!" });
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

updatetaxrate = async (req) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        // var TE = `UPDATE taxes SET 
        // residential_taxes_general_per = ${req.body.residential_taxes_general_per}, 
        // water_benefit_task_per = ${req.body.water_benefit_task_per}, 
        // sewarage_tax_per = ${req.body.sewarage_tax_per}, 
        // sewarage_benefit_tax_per = ${req.body.sewarage_benefit_tax_per}, 
        // education_cess_per = ${req.body.education_cess_per},
        // tree_cess_per = ${req.body.tree_cess_per}, 
        // stree_tax_per = ${req.body.stree_tax_per}, 
        // employment_guarantee_per = ${req.body.employment_guarantee_per}, 
        // fire_tax_per = ${req.body.fire_tax_per}, 
        // discount = ${req.body.discount}
        // WHERE policy_year = ${req.params.policy_year}`
        var TE = `UPDATE taxesvSET tax_name=${req.body.tax_name},
        taxrate:${req.body.taxrate}`
        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });

        resolve({ done: 1, data: GetTERes[0] })
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

getBillPolicies = async (req) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        resolve({ done: 0, message: 'unauthorized user' })
      } else {
        var TE = 'SELECT * FROM taxes'

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

        resolve({ done: 1, data: GetTERes })
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

module.exports.updatetaxrate = updatetaxrate;
module.exports.getBillPolicies = getBillPolicies;
module.exports.addtaxrate = addtaxrate;
module.exports.gettaxrate = getBillPolicies;