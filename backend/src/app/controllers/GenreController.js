const Genre = require("../models/Genre");

const GenreController = {
  getAll: async (req, res) => {
    try {
      const allGenre = await Genre.find();
      res.json({
        success: true,
        message: "Get All Genre",
        allGenre: allGenre,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  create: async (req, res) => {
    const dataGenre = req.body;
    const isExisted = await Genre.exists({ name: dataGenre.name });
    if (isExisted) {
      res.json({
        success: false,
        message: "thể loại phim đã tồn tại !",
      });
    } else {
      const newGenre = new Genre(dataGenre);
      await newGenre.save();
      res.json({
        success: true,
        genre: newGenre,
      });
    }
  },
  update: async (req, res) => {
    try {
      await Genre.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.json({ success: true, message: "Genre updated" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Genre.deleteOne({ _id: req.params.id });
      res.json({ success: true, message: "Genre deleted" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = GenreController;
