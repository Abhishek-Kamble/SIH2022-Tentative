//packages
const sequelize = require('../serviceHost').sequelize;
const Type = require('basic-utils');

const insertOne = async function(model, record, options, transaction){

    if (!Type.isObj(record)) {
        return await new Promise( (resolve, reject) => {
            reject(new Error('Record object is not of object type'));
        });
    }

    return await new Promise( (resolve, reject) => {

        model.create(record, options, {transaction: transaction}).then(

            modelEntry => {
                console.log("Model entry Created: " + modelEntry);
                resolve(modelEntry);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};

const insertMany = async function(model, records, options, transaction){

    if(!Type.isArray(records)){
        return await new Promise( (resolve, reject) => {
            reject(new Error("Records object is not of array type"));
        });
    }

    return await new Promise( (resolve, reject) => {

        model.bulkCreate(records, options, {transaction: transaction}).then(

            modelEntry => {
                console.log("Model entry Created: " + modelEntry);
                resolve(modelEntry);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};

const find = async function(model, options, transaction){

    return await new Promise( (resolve, reject) => {

        model.findAll(options, {transaction: transaction}).then(

            modelEntry => {
                console.log("Model entry Found: " + modelEntry);
                resolve(modelEntry);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};

const deleteById = async function(model, id, options, transaction){

    if(id==null || id==undefined){
        return await new Promise( (resolve, reject) => {
            reject(new Error("Primary key or Id is mandatory for record/row deletion"));
        });
    }

    return await new Promise( (resolve, reject) => {

        const pk = Object.keys(model.primaryKeys)[0];

        const opts = {
            where: {}
        };

        opts.where[pk] = id;

        Object.assign(options, opts);

        model.destroy(options, {transaction: transaction}).then(

            modelEntry => {
                console.log("Model record Deleted: " + modelEntry);
                resolve(modelEntry);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};


const updateById = async function(model, id, newRecord, options, transaction){

    if(id==null || id==undefined){
        return await new Promise( (resolve, reject) => {
            reject(new Error("Primary key or Id is mandatory for record/row update"));
        });
    }

    return await new Promise( (resolve, reject) => {

        const pk = Object.keys(model.primaryKeys)[0];

        const opts = {
            where: {}
        };

        opts.where[pk] = id;

        Object.assign(options, opts);

        model.update(newRecord, options, {transaction: transaction}).then(

            modelEntry => {
                console.log("Model record Updated: " + modelEntry);
                resolve(modelEntry);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};

const query = async function(sql, options, transaction){

    return await new Promise( (resolve, reject) => {

        sequelize.query(sql, options, {transaction: transaction}).then(

            queryResult => {
                console.log("Query Result: " + queryResult);
                resolve(queryResult);
            },
            error =>{
                console.log('Database MysqlDB Error: ' + error);
                reject(error);
            }
        )
    });
};

const GetAllUserEntityAccess = async function(userId){

    return await new Promise( (resolve, reject) => {

        UserEntityAccess.findAll({where: {user_id: userId}})
            .then( userEntityAccess => {
                console.log('UserEntityAccess Fetched for given userId: ' + PrintObject(userEntityAccess));
                resolve(userEntityAccess);
            }, error => {
                console.log('Error in fetching UserEntityAccess for given userId: ' + error);
                reject(error);
            });
    });
};

module.exports.insertOne = insertOne;
module.exports.insertMany = insertMany;
module.exports.find = find;
module.exports.query = query;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.getUserEntityAccess = GetAllUserEntityAccess;