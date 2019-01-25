
exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable( 'customer', function( customerTable ) {

      // Primary Key
      customerTable.increments();

      // Data
      customerTable.string( 'name', 50 ).notNullable();
      customerTable.string( 'username', 50 ).notNullable().unique();
      customerTable.string( 'email', 250 ).notNullable().unique();
      customerTable.string( 'product',200 ).notNullable();
      customerTable.string( 'password', 128 ).notNullable();
    

      customerTable.timestamp( 'created_at' ).notNullable();

  } )

  .createTable( 'product', function( productTable ) {

      // Primary Key
      productTable.increments();
    //   productsTable.string( 'owner', 36 ).references( 'product' ).inTable( 'users' );

      // Data
      // Each chainable method creates a column of the given type with the chained constraints. For example, in the line below, we create a column named `name` which has a maximum length of 250 characters, is of type string (VARCHAR) and is not nullable. 
      productTable.string( 'name', 250 ).notNullable();
      productTable.string( 'category', 250 ).notNullable();
      productTable.string( 'price', 250 ).notNullable();
      productTable.boolean( 'isAvailable' ).notNullable().defaultTo( true );

      productTable.timestamp( 'created_at' ).notNullable();

  } ); 
};

exports.down = function(knex, Promise) {
  return knex
        .schema
            .dropTableIfExists( 'product' )
            .dropTableIfExists( 'customer' );
};
