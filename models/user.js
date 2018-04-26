'use strict';

var bcrypt = require('bcrypt');

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

  User.hook('beforeSave', (user, options) => {
    const saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })

  return User;
};
