const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const payments = sequelize.define(
  'payments',
  {
    payment_method: {
      type: Sequelize.DataTypes.INTEGER(1), //offine - staff id, online - merchant id
      allowNull: false,
    },
    payment_method_type: {
      type: Sequelize.DataTypes.INTEGER(1), //1 - online 2 - offline
      allowNull: false,
    },
    user_id: {
      type: Sequelize.DataTypes.STRING(15),
      allowNull: false,
    },
    property_id: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false,
    },
    amount_paid: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    payment_status: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    transaction_id: {
      type: Sequelize.DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    trancation_date:{
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    }
  },
  {
    table: 'payments',
  }
);

module.exports = payments;
