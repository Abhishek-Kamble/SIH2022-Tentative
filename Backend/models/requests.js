const Sequelize = require('sequelize');
const sequelize = require('../serviceHost').sequelize
const property=require('./property')
const user=require('./user')

const Requests=sequelize.define(
    'Request',
    {
        user_id:{
            type:Sequelize.DataTypes.STRING(11),
            allowNull : false,
            references:{
                model: user,
                key:'user_id' 
            }
        },
        property_id:{
            type:Sequelize.DataTypes.STRING(11),
            allowNull: false,
            references: {
                model: property,
                key: 'property_id',
            }
        } 
    },
    {
        table: 'Request'
    }
);
module.exports=Requests;