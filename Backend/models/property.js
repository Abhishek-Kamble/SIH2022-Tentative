const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize
const zoneData = require('./zoneData')
const users = require('./user')
const properties = sequelize.define(
    'properties',
    {
        property_id:{
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            primaryKey: true,
        },
        property_address: {
            type: Sequelize.DataTypes.STRING(80),
            allowNull: false,
        },
        affidavit_id: {
            type: Sequelize.DataTypes.STRING(80),
        },
        application_id: {
            type: Sequelize.DataTypes.STRING(80),
        },
        zone_id: {
            type: Sequelize.DataTypes.STRING(11), // zone id from the zoneData
            allowNull: false,
            references: {
                model: zoneData,
                key: 'zone_id',
            },
        },
        user_id: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            references: {
                model: users,
                key: 'user_id',
            },
        },
        areacovered: {
            type: Sequelize.DataTypes.INTEGER(10), // in sq meter
            allowNull: false,
        },
        yearconstruction: {
            type: Sequelize.DataTypes.DATE, // Date of construction year
            allowNull: false,
        },
        /* use -  1 - Residential Purpose | 2 - Non residential public purpose | 3 - Non residential public utility | 
            4 - Industry, entertainment and clubs | 5 - Restaurants, hotels up to 2 star rating 
            | 6 - 3star and above hotels, towers, hoarding
        */
        use: {
            type: Sequelize.DataTypes.INTEGER(5),  
            allowNull: false,
        },
        /* Type of Construction - 1 - RCC building (pucca ) | 2 - semi RCC building (semi pucca ) | 3 - non rcc building ( kuchcha ) */
        constructortype: {
            type: Sequelize.DataTypes.INTEGER(5),
            allowNull: false,
        },
        /* Occupancy Type - 1.Self occupied | 2.Rented out | 3.vacant plot */
        occupancytype: {
            type: Sequelize.DataTypes.INTEGER(2),
            allowNull: false,
        },
        /* Property Type -  1.Residential Property | 2.Commercial Property | 3.Industrial  Property  */
        type: {
            type: Sequelize.DataTypes.INTEGER(2),
            allowNull: false,
        },
        isVerified: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Registration_date: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
        },
        /*longitude: {
            type: Sequelize.DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: 0
        },
        lattitude: {
            type: Sequelize.DataTypes.INTEGER(2),
            allowNull: true,
            defaultValue: 0
        },*/
        area: {
            type: Sequelize.DataTypes.INTEGER(5),
            allowNull: false,
        },
        floors: {
            type: Sequelize.DataTypes.INTEGER(2),
            allowNull: false,
        },
        land_number: {
            type: Sequelize.DataTypes.INTEGER(5),
            allowNull: false,
        },
    },
    {
        table: 'properties',
    }
);

module.exports = properties;
