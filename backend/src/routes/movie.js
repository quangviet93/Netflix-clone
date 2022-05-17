const express = require("express");
const router = express.Router();
const movieController = require("../app/controllers/MovieController");
const middleware = require("../app/middlewares/JWTMiddleware");

router.post("/create", middleware.authentication, movieController.create);
router.put("/update/:id", middleware.authentication, movieController.update);
router.delete("/delete/:id", middleware.authentication, movieController.delete);
router.get("/all", movieController.getAll);
module.exports = router;
