const express = require("express");
const { getAllMovies, getMovie } = require("../controllers/moviesController");

const router = express.Router();

router
    .get("/", getAllMovies)
    .get("/:movieId", getMovie)

module.exports = router;