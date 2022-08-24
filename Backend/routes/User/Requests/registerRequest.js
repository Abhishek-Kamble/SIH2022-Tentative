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
                    user_id:req.body.user_id,
                    property_id:req.body.property_id
                }
                const transaction = await sequelize.transaction();
            
                //check if request is already made
                if(DatabaseRepository.find(RequestModel,(({ where: {user_id:data.user_id} })),transaction)==null)
                {
                      DatabaseRepository.insertOne(RequestModel,data,null,transaction);
                      resolve('Request has been successfully submitted');
                }
                else{

                     reject("Property details updation request already submitted")
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