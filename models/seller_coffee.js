'use strict';
module.exports = (sequelize, DataTypes) => {
  var seller_coffee = sequelize.define('seller_coffee', {
    seller_id: DataTypes.INTEGER,
    coffee_id: DataTypes.INTEGER
  }, {});
  seller_coffee.associate = function(models) {
    // associations can be defined here
    seller_coffee.belongsTo(models.Seller)
    seller_coffee.belongsTo(models.Coffee)
  };
  return seller_coffee;
};
