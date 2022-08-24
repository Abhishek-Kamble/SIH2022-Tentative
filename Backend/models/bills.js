const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const bills = sequelize.define(
  'bills',
  {
    user_id: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false,
    },
    property_id: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false,
    },
    residential_taxes_general: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    water_benefit_task: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    sewarage_tax: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    sewarage_benefit_tax: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    education_cess: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    tree_cess: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    stree_tax: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false
    },
    employment_guarantee: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false
    },
    fire_tax: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
    },
    amount_paid: {
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false
    },
    transaction_id: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false
    },
    bill_id: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    },
    bill_paid_date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false    },
    discount: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    },
    property_value: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    },
    status: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    }
  },
  {
    table: 'bills',
  }
);

module.exports = bills;
