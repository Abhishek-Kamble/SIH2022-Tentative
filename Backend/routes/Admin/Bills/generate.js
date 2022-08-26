const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize

module.exports.create = async(req)=>{
  return await new Promise (async (resolve, reject) => {
    try {
        const id = req.params.id;

        console.log(id)
        var TE = `SELECT * from properties`;

        var GetData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
        console.log(GetData)
        for (var i = 0; i < GetData.length; i++) {
            var tmp = GetData[i];
            var BillData = {
                user_id:tmp.user_id,
                property_id:tmp.property_id,
                
            }
        }
        resolve({ found: 1, message: "Data done", Data: GetData });
        
    } catch (error) {
      reject({done: 0, message: error})
    }
  })
}