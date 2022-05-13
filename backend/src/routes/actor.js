const express = require("express");
const router = express.Router();
const actorController = require("../app/controllers/ActorController");
const middleware = require("../app/middlewares/JWTMiddleware");

router.post("/create", middleware.authentication, actorController.create);
router.put("/update/:id", middleware.authentication, actorController.update);
router.delete("/delete/:id", middleware.authentication, actorController.delete);

module.exports = router;
