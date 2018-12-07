const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries/movie-queries')
const cors = require('cors')
const bodyParser = require('body-parser')
const movies = require('./routs/movie-routs')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/movies', movies)




app.listen (port, () => {
    console.log(`listening on port ${port}`)
})