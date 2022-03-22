const express = require("express");
const { getAllMovies, getMovie } = require("../controllers/moviesController.js");

const router = express.Router();

router
    .get("/", getAllMovies)
    .get("/:movieId", getMovie)

module.exports = router;

// module.exports = () => {
//     router.route("/").get(getAllMovies)
//     router.route("/:movieId").get(getMovie)
//     return router
// };