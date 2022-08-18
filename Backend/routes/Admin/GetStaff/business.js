const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')

module.exports.get = async function (req) {
    return await new Promise(async (resolve, reject) => {
        try {
            const id = req.params.id;

            console.log(id)
            var TE = `SELECT * from employees WHERE role=2`;

            var GetData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
            console.log(GetData)
            resolve({ found: 1, message: "Data done", Data: GetData });
            
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}