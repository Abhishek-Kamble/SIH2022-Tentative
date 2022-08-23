const Sequelize=require('sequelize')
const DatabaseRepository = require('../../../services/DataBaseQuery')
const sequelize = require('../../../serviceHost').sequelize
const RequestModel=require('../../../models/requests')
const registerIncomingRequest= async function(req)
{
    return await new Promise(async(resolve,reject)=>
    {
         try{
                var data={
                    user_id:req.user_id,
                    property_id:req.property_id
                }
                const transaction = await sequelize.transaction();
            
                //check if request is already made
                if(DatabaseRepository.find(RequestModel,data,NULL,transaction)!=NULL)
                {
                      DatabaseRepository.insertOne(RequestModel,data,NULL,transaction);
                      resolve('Request has been successfully submitted');
                }
                else{
                     throw error('Property details updation request already submitted');
                }
                
         }
         catch(err)
         {
            reject(err);
         }
    })
}

module.exports.registerIncomingRequest=registerIncomingRequest;