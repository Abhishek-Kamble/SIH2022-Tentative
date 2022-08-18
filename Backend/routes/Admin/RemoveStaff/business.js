const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery')

module.exports.delete = async function (req) {
    return await new Promise(async (resolve, reject) => {
        try {
            const id = req.params.id;

            console.log(id)
            var TE = `DELETE FROM employees WHERE employee_id=${id}`;

            await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.DELETE });
            resolve({ found: 1, message: "Succefully Deleted!" })
            
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}