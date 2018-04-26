'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffee = sequelize.define('Coffee', {
    coffee_name: DataTypes.STRING,
    region: DataTypes.STRING,
    regionDetail: DataTypes.STRING,
    farmer: DataTypes.STRING,
    elevation: DataTypes.STRING,
    varieties: DataTypes.STRING,
    harvest_process: DataTypes.STRING,
    SellerId:DataTypes.INTEGER
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
    Coffee.belongsToMany(models.Seller, {
      through: models.seller_coffee
    })
    Coffee.hasMany(models.seller_coffee)
  };
  return Coffee;
};
