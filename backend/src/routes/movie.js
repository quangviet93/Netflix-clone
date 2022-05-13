const express = require("express");
const router = express.Router();
const movieController = require("../app/controllers/MovieController");
const middleware = require("../app/middlewares/JWTMiddleware");

router.post("/create", middleware.authentication, movieController.create);

module.exports = router;
