const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const employees = sequelize.define(
    'employees',
    {
        fname:{
            type: Sequelize.DataTypes.STRING(50),
            allowNull:false,
        },
        lname:{
            type: Sequelize.DataTypes.STRING(50),
            allowNull:false,
        },
        employee_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
        },
        mobile_number:{
            type: Sequelize.DataTypes.INTEGER(10),
            allowNull: false,
        },
        email:{ 
            type: Sequelize.DataTypes.STRING(50),
            allowNull: false,
        },
        password:{
            type: Sequelize.DataTypes.STRING(80),
            allowNull: false,
        },
        isVerifed:{
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        role:{
            type: Sequelize.DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 5  // 1 admin | 2 staff  | 5 user
        }
    },
    {
        table: 'employees',
    }
);

module.exports = employees;
