const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')

module.exports.delete = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (req.decoded.role != '1') {
        res.send({ message: 'unauthorized user' })
      } else {
        var TE = `DELETE FROM rebates WHERE rebate_id; = ${req.params.rebate_id}`

        var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.DELETE });

        resolve({done: 1, data: GetTERes[0]})
      }
    } catch (error) {
      reject({ done: 0, message: error.message })
    }
  }
  )
}