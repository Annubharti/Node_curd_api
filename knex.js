const knex = require( 'knex' )({

  client: 'mysql',
  connection: {

      host: 'localhost',

      user: 'root',
      password: 'ng18',

      database: 'user',
      charset: 'utf8',

  }

} );
module.exports = knex