const Sequelize = require('sequelize');

const sequelize = require('../serviceHost').sequelize

const users = sequelize.define(
  'users',
  {
    name: {
      type: Sequelize.DataTypes.STRING(50),
      allowNull: false,
    },
    user_id: {
      type: Sequelize.DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
    },
    home_address: {
      type: Sequelize.DataTypes.STRING(50),
      allowNull: false,
    },
    mobile_number: {
      type: Sequelize.DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.DataTypes.STRING(80),
      allowNull: false,
    },
    isVerified: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    role: {
      type: Sequelize.DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 5  // 1 admin | 2 staff  | 5 user
    },
    Registration_date:{
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: (new Date().toJSON().slice(0, 19).replace('T', ' '))
    }
  },
  {
    table: 'users',
  }
);

module.exports = users;
