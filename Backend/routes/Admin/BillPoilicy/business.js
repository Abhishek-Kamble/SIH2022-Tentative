const Sequelize = require('sequelize');
const billpolicy = require('../../../models/billPolicy');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize

getBillPolicy = async (req) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `SELECT * FROM billpolicy WHERE policy_year = ${req.params.policy_year} AND policy_type = ${req.params.policy_type}`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

        resolve({ done: 1, data: GetTERes[0] })
      }
    } catch (error) {
      reject({ done: 0, message: error })
    }
  })
}

addBillPolicy = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        const transaction = await sequelize.transaction();

        const Data = {
          "policy_type": req.body.policy_type,
          "policy_year": req.body.policy_year,
          "residential_taxes_general_per": req.body.residential_taxes_general_per,
          "water_benefit_task_per": req.body.water_benefit_task_per,
          "sewarage_tax_per": req.body.sewarage_tax_per,
          "sewarage_benefit_tax_per": req.body.sewarage_benefit_tax_per,
          "education_cess_per": req.body.education_cess_per,
          "tree_cess_per": req.body.tree_cess_per,
          "stree_tax_per": req.body.stree_tax_per,
          "employment_guarantee_per": req.body.employment_guarantee_per,
          "fire_tax_per": req.body.fire_tax_per,
          "discount": req.body.discount
        }

        const policyData = await DatabaseRepository.insertOne(billpolicy, Data, null, transaction);

        resolve({ done: 1, mesage: "Policyy data inserted into DB!" });
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

updateBillPolicy = async (req) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `UPDATE billpolicy SET 
        residential_taxes_general_per = ${req.body.residential_taxes_general_per}, 
        water_benefit_task_per = ${req.body.water_benefit_task_per}, 
        sewarage_tax_per = ${req.body.sewarage_tax_per}, 
        sewarage_benefit_tax_per = ${req.body.sewarage_benefit_tax_per}, 
        education_cess_per = ${req.body.education_cess_per},
        tree_cess_per = ${req.body.tree_cess_per}, 
        stree_tax_per = ${req.body.stree_tax_per}, 
        employment_guarantee_per = ${req.body.employment_guarantee_per}, 
        fire_tax_per = ${req.body.fire_tax_per}, 
        discount = ${req.body.discount}
        WHERE policy_year = ${req.params.policy_year}`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });

        resolve({ done: 1, data: GetTERes[0] })
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

getBillPolicies = async function (data) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `SELECT * FROM billpolicy`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

        resolve({ done: 1, data: GetTERes[0] })
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}

module.exports.updateBillPolicy = updateBillPolicy;
module.exports.getBillPolicies = getBillPolicies;
module.exports.addBillPolicy = addBillPolicy;
module.exports.getBillPolicy = getBillPolicies;