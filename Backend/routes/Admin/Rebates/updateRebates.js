const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')

module.exports.update = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `UPDATE rebates SET 
        rebate_name = ${req.body.rebate_name}, 
        rebate_discription = ${req.body.rebate_discription}, 
        discount_per = ${req.body.discount_per}, 
        start_date = ${req.body.start_date}, 
        end_date = ${req.body.end_date}
        WHERE rebate = ${req.params.rebate_id}`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });

        resolve({done: 1, data: GetTERes[0]})
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  })
}