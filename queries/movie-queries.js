const db = require('../database_connections')

module.exports = {
    showAllMovies(){
        return db('movies')
    },
    showMoviesByTitle(title){
        return db('movies').where('title', title).first()
    },
    deleteMovies(id){
        return db('movies').where('id', id).delete()
    },
    updateMovies(id, body){
        return db('movies').where('id', id).update(body).returning('*')
    },
    addMovie(newMovie){
        return db('movies').insert(newMovie).returning('*')
    }
}