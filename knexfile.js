module.exports = {

  development: {

      migrations: { tableName: 'knex_migrations' },
      seeds: { tableName: './seeds' },

      client: 'mysql',
      connection: {

          host: 'localhost',

          user: 'root',
          password: 'ng18',

          database: 'user',
          charset: 'utf8',

      }

  }

};