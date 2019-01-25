exports.seed = function seed( knex, Promise ) {

  var tableName = 'customer';

  var rows = [

      // You are free to add as many rows as you feel like in this array. Make sure that their an object containing the following fields:
      {
          name: 'Annu Bharti',
          username: 'annu13',
          email: 'anu@bharti.com',
          product: 'purse',
          password: 'passws1',
          
  
      },
      {
        name: 'Shanti Priya',
        username: 'sabshant',
        email: 'ppm@jp.com',
        product: 'charger',
        password: 'psadad2',


    },


  ];

  return knex( tableName )
      // Empty the table (DELETE)
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};