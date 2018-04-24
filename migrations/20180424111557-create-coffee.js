'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coffees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coffee_name: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      regionDetail: {
        type: Sequelize.STRING
      },
      farmer: {
        type: Sequelize.STRING
      },
      elevation: {
        type: Sequelize.STRING
      },
      varieties: {
        type: Sequelize.STRING
      },
      harvest_process: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Coffees');
  }
};