'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coffees', [{
      coffee_name     : 'kopi arabika huta raja',
      region          : 'Sumatra utara',
      regionDetail    :'simalungun',
      farmer          :'Lisa & Leo Organic',
      elevation       :'1400-1500mdpl',
      varieties       :'katimor',
      harvest_process :'Natural',
      createdAt       : new Date(),
      updatedAt       : new Date()
    },{
      coffee_name: 'kopi arabika Sunda Hejo',
      region: 'Jawa Barat',
      regionDetail:'Garut',
      farmer:'Klasik Bean',
      elevation:'1250mdpl',
      varieties:'Lini S, Typica, Ateng',
      harvest_process:'semi wash',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
