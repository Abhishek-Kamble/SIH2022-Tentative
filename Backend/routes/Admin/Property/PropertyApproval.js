const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize

module.exports.Approval = async function(req) {
  return await new Promise (async (resolve, reject) => {
    try {
      var TE = `SELECT * FROM properties WHERE property_id=${property_id}`

      var GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });

      if(GetTERes.length === 0) {
        resolve({done: 0, message: "Invalid Property Number"})
      }

      if(GetTERes[0].isVerified === 1){
        resolve({done: 1, message: "Property Already aproved!"});
      }

      TE = 'UPDATE properties SET isVerified=1 WHERE employee_id=' + mysql.escape(req.body.property_id)

        GetTERes = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.UPDATE });
        
        resolve({done: 1, message: "Succefully Updated Password!"})

    } catch (error) {
      reject({done: 0, message: error})
    }
  })
}
