const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const billpolicy = sequelize.define(
  'billpolicy',
  {
    policy_type:{
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    },
    policy_year: {
      type: Sequelize.DataTypes.DATE,
      allowNullFalse:false
    },
    residential_taxes_general_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    water_benefit_task_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    sewarage_tax_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    sewarage_benefit_tax_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    },
    education_cess_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    },
    tree_cess_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    },
    stree_tax_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    employment_guarantee_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false,
    },
    fire_tax_per: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    },
    discount: {
      type: Sequelize.DataTypes.INTEGER(2),
      allowNull: false
    }
  },
  {
    table: 'billpolicy',
  }
);

module.exports = billpolicy;
