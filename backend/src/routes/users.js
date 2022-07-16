const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/UserController");
const middleware = require("../app/middlewares/JWTMiddleware");

router.get("/allUser", userController.getAllUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get('/profile', middleware.authentication, userController.getProfile);

module.exports = router;
