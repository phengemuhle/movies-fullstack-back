// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/movies_database'
    }
  },

  production: {
    client: 'pg',
    connection: process.eventNames.DATABASE_URL
  }

};
