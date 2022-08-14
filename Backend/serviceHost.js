const express = require('express');
const bodyParser = require('body-parser');
var db = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var insertOptions = {force: false};

db.sequelize.sync(insertOptions).then(result => {
    //console.log("Database Sync Result: " + printObject(result));
    console.log("Database Connected and Sync Result is  " + result);

}).catch(err => {
    console.log("Database Sync Error: " + err);
});

module.exports.expressApp = app;
module.exports.sequelize = db.sequelize;
module.exports.Express = express;