
const { movies } = require ("../constants/movies")
const getallMovies = (req, res) => {
    res.json(movies)
}

const getMovie = () => {
    res.json(movies);
}

module.export = {
     getallMovies,
     getMovie
}