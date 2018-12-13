
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.string('year')
        movie.text('description')
        movie.text('main_characters')
        movie.text('review')
        movie.string('director')
        movie.integer('rating')
        movie.string('poster')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
