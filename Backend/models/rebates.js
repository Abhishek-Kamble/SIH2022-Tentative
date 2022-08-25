const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const rebates = sequelize.define(
  'rebates',
  {
    rebate_id: {
      type: Sequelize.DataTypes.STRING(11), 
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
    }
  },
  {
    table: 'rebates',
  }
);

module.exports = rebates;
