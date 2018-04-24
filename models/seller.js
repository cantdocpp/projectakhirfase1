'use strict';
module.exports = (sequelize, DataTypes) => {
  var Seller = sequelize.define('Seller', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telp: DataTypes.STRING
  }, {});
  Seller.associate = function(models) {
    // associations can be defined here
  };
  return Seller;
};