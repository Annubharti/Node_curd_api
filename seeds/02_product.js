exports.seed = function seed( knex, Promise ) {

  var tableName = 'product';

  var rows = [

      {
          name: 'purse',
          category: 'asscesory',
          price: '500',
          isAvailable: true,
      },

      {
          name: 'charger',
          category: 'electronic',
          price: '500',
          isAvailable: false,
      },

  ];

  return knex( tableName )
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};