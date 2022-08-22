require('dotenv').config();
// const process.env = require("./db.config");
const Sequelize = require("sequelize");
console.log(process.env.PASSWORD)
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.dialect,
  pool: {
    max: parseInt(process.env.pool_max),
    min: parseInt(process.env.pool_min),
    acquire: parseInt(process.env.pool_acquire),
    idle: parseInt(process.env.pool_idle)
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;