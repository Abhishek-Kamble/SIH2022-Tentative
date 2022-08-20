const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const zones = sequelize.define(
  'zones',
  {
    zone_name: {
      type: Sequelize.DataTypes.STRING(30),
      allowNull: false,
    },
    zone_id: {
      type: Sequelize.DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
    },
    resendential_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
    commercial_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
    industrial_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
    uav:{
      type: Sequelize.DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: 0,
    }
    
  },
  {
    table: 'zones',
  }
);

module.exports = zones;
