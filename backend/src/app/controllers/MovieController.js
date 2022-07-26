const Movie = require("../models/Movie");

const MovieController = {
  create: async (req, res) => {
    const dataMovie = req.body;
    const isExisted = await Movie.exists({ name: dataMovie.name });
    if (isExisted) {
      res.json({
        success: false,
        message: "phim đã tồn tại !",
      });
    } else {
      const movie = new Movie(dataMovie);
      await movie.save();
      res.json({
        success: true,
        movie: movie,
      });
    }
  },
  update: async (req, res) => {
    try {
      await Movie.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.json({ success: true, message: "Movie updated" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Movie.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true, message: "Movie deleted" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const dataMovie = await Movie.find();
      res.json({
        success: true,
        message: "Movie Get All",
        dataMovie: dataMovie,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = MovieController;
