
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (movie) => {
        movie.increment('id')
        movie.string('title')
        movie.integer('year')
        movie.string('cast')
        movie.string('genres')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
