const express = require("express");
const app = express();
const userRoutes = express.Router();
const userController =  require("../../controllers/user/userController");

userRoutes.route("/").get(userController.index);

module.exports = userRoutes;