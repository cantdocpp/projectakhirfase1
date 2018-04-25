'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffee = sequelize.define('Coffee', {
    coffee_name: DataTypes.STRING,
    region: DataTypes.STRING,
    regionDetail: DataTypes.STRING,
    farmer: DataTypes.STRING,
    elevation: DataTypes.STRING,
    varieties: DataTypes.STRING,
    harvest_process: DataTypes.STRING
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
  };
  return Coffee;
};
