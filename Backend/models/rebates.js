const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const rebates = sequelize.define(
  'rebates',
  {
    rebate_id: {
      type: Sequelize.DataTypes.STRING(11), 
      primaryKey: true,
      allowNull: false,
    },
    rebate_name: {
      type: Sequelize.DataTypes.STRING(40),
      allowNull: false,
    },
    rebate_discription: {
      type: Sequelize.DataTypes.STRING(80),
      allowNull: false,
    },
    discount_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
    },
    added_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    start_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    table: 'rebates',
  }
);

module.exports = rebates;
