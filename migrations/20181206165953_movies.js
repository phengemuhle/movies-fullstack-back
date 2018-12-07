
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.integer('episode_number')
        movie.string('main_characters')
        movie.string('director')
        movie.integer('rating')
        movie.string('poster')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
