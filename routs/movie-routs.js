const express = require('express')
const router = express.Router()
const queries = require('../queries/movie-queries')

router.get('/', (req,res) => {
    queries.showAllMovies().then(movies => res.send(movies))
})

router.get('/:title', (req,res) => {
    queries.showMoviesByTitle(req.params.title).then(movie => res.status(200).send({ movie }))
})

router.post('/', (req,res) => {
    queries.addMovie(req.body).then(newMovie => res.status(201).send({ newMovie }))
})
router.delete('/:id', (req,res) => {
    queries.deleteMovies(req.params.id).then(res.send("No mas movie"))
})
router.put('/:id', (req,res) => {
    queries.updateMovies(req.params.id, req.params.body).then(updated => res.status(202).json(updated))
})

module.exports = router