const Sequelize = require('sequelize');
const zones = require('../../../models/zoneData');
const zone=require('../../../models/zoneData');
const DatabaseRepository = require('../../../services/DataBaseQuery')
const sequelize = require('../.../../../../serviceHost').sequelize
const zoneRegister=async function( req)
{
    return await new Promise(async (resolve,reject)=>{
     try{
            var data = {
                zone_name:req.body.zone_name,
                zone_id:req.body.zone_id,
                residential_per:req.body.residential_per,
                commercial_per:req.body.commercial_per,
                industrial_per:req.body.industrial_per,
                uav:req.body.uav,
            }
            const transaction = await sequelize.transaction();
            const zoneData = DatabaseRepository.insertOne(zones,data,null,transaction);
            resolve(zoneData);
    }
    catch(error)
    {
        console.log(error);
        reject(error);
    }
    })
}

module.exports.zoneRegister=zoneRegister;