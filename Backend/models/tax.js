const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const taxrate = sequelize.define(
    'taxes',
    {
        tax_id: {
            type: Sequelize.DataTypes.INTEGER(5),
            allowNull: false
        },
        tax_name: {
            type: Sequelize.DataTypes.STRING(50),
            allowNull: false
        },
        taxrate: {
            type: Sequelize.DataTypes.INTEGER(6),
            allowNull: false
        },

    },
    {
        table: 'taxes',
    }
);

module.exports = taxrate;
