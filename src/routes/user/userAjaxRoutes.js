const express = require("express");
const app = express();
const userAjaxRoutes =  express.Router();
const userAjaxController = require("../../controllers/user/userAjaxController");

userAjaxRoutes.route("/user-detail").post(userAjaxController.getUserDetail);

module.exports = userAjaxRoutes;