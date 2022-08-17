const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize
const zoneData = require('./zoneData')
const users = require('./user')
const Property = sequelize.define(
    'property',
    {
        areacovered: {
            type: Sequelize.DataTypes.NUMBER, // in sq meter
            allowNull: false,
        },
        yearconstruction: {
            type: Sequelize.DataTypes.DATE, // Date of construction year
            allowNull: false,
        },
        zone_id: {
            type: Sequelize.DataTypes.NUMBER, // zone id from the zoneData
            allowNull: false,
            references: {
                model: zoneData,
                key: 'zones',
            },
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: users,
                key: 'users',
            },
        },
        /* use -  1 - Residential Purpose | 2 - Non residential public purpose | 3 - Non residential public utility | 
            4 - Industry, entertainment and clubs | 5 - Restaurants, hotels up to 2 star rating 
            | 6 - 3star and above hotels, towers, hoarding
        */
        use: {
            type: Sequelize.DataTypes.NUMBER,  
            allowNull: false,
        },
        /* Type of Construction - 1 - RCC building (pucca ) | 2 - semi RCC building (semi pucca ) | 3 - non rcc building ( kuchcha ) */
        constructortype: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false,
        },
        /* Occupancy Type - 1.Self occupied | 2.Rented out | 3.vacant plot */
        occupancytype: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false,
        },
        /* Property Type -  1.Residential Property | 2.Commercial Property | 3.Industrial  Property  */
        type: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false,
        },

    },
    {
        table: 'property',
    }
);

module.exports = Property;
