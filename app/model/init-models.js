var DataTypes = require("sequelize").DataTypes;
var _restaurant = require("./restaurant");
var _setting = require("./setting");
var _user = require("./user");

function initModels(sequelize) {
  var restaurant = _restaurant(sequelize, DataTypes);
  var setting = _setting(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    restaurant,
    setting,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
