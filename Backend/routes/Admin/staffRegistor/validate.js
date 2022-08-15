

var ValidateDatabase = async function(req) {
    return await new Promise(async (resolve,reject)=>{
        // req.body req.body.password = rand
        try{



            resolve();
        }catch(err){
            reject(err);
        }
    })
}

module.exports = ValidateDatabase;