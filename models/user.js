'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    type_drinker: DataTypes.STRING,
    favorite_coffee: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    Status:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
