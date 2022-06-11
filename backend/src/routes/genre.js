const express = require("express");
const router = express.Router();
const genreController = require("../app/controllers/GenreController");
const middleware = require("../app/middlewares/JWTMiddleware");

router.get("/all", middleware.authentication, genreController.getAll);
router.post("/create", middleware.authentication, genreController.create);
router.put("/update/:id", middleware.authentication, genreController.update);
router.delete("/delete/:id", middleware.authentication, genreController.delete);

module.exports = router;
