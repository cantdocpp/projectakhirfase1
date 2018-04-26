'use strict';

var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Seller = sequelize.define('Seller', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telp: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    Status:DataTypes.STRING,
    CoffeeId:DataTypes.INTEGER
  }, {});
  Seller.associate = function(models) {
    // associations can be defined here
    Seller.belongsToMany(models.Coffee, {
      through: models.seller_coffee
    })
    Seller.hasMany(models.seller_coffee)
  };

  Seller.hook('beforeSave', (user, options) => {
    const saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })
  return Seller;
};
