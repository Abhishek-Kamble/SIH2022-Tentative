const Sequelize = require('sequelize');
const sequelize = require('../serviceHost').sequelize

const gisdata = sequelize.define(
  'gisdata',
  {
    property_id: {
      type: Sequelize.DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    elevation: {
      type: Sequelize.DataTypes.STRING(11),
      allowNull: false
    },
    assessment_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false
    }
  },
  {
    table: 'gisdata',
  }
);

module.exports = gisdata;