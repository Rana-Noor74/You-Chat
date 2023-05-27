const express = require("express");
const app = express();
const userRoutes = express.Router();
const userController =  require("../../controllers/user/userController");

userRoutes.route("/").get(userController.index);
userRoutes.route("/login").get(userController.login);
userRoutes.route("/lock-screen").get(userController.lockScreen);

module.exports = userRoutes;