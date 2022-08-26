const Sequelize = require('sequelize');
const DatabaseRepository = require('../../../services/DataBaseQuery');
const sequelize = require('../../../serviceHost').sequelize
const calcualte = require('../../Property/calcualte').calcualte;
const mysql = require('mysql2')

function percentage(val, per)
{
  return (val/100)*per;
}

module.exports.create = async(req)=>{
  return await new Promise (async (resolve, reject) => {
    try {
        const id = req.params.id;
        var PT = 'select * from taxes';
        var pTaxData = await DatabaseRepository.query(PT, {replacement: [], type: Sequelize.QueryTypes.SELECT});
        var TE = 'SELECT * from properties where property_id='+mysql.escape(req.body.property_id);

        var GetData = await DatabaseRepository.query(TE, { replacement: [], type: Sequelize.QueryTypes.SELECT });
        console.log(GetData,pTaxData)
        for (var i = 0; i < GetData.length; i++) {
            var tmp = GetData[i];
            var BillData = tmp;
            BillData.tax = {}
            BillData.rate = {}
            req.decoded = {}
            req.decoded.id = tmp.user_id;
            req.body.property_id = tmp.property_id;
            var taxes = await calcualte(req)
            BillData.taxx = taxes.tax;
            BillData.PropertyValue = taxes.PropertyValue
            for(var j = 0; j < pTaxData.length; j++){
              // console.log(pTaxData[i])
              BillData.tax[pTaxData[j].tax_name] = percentage(taxes.tax,pTaxData[j].taxrate)
              BillData.rate[pTaxData[j].tax_name] = pTaxData[j].taxrate
            }
            console.log(BillData,taxes);
        }
        resolve({ found: 1, message: "Data done", Data: BillData });
        
    } catch (error) {
      console.log(error);
      reject({done: 0, message: error})
    }
  })
}