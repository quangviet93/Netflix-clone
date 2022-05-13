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
};

module.exports = MovieController;
