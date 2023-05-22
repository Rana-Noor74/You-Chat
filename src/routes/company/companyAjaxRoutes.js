const express = require("express");
const companyAjaxRoutes =  express.Router();
const companyAjaxController = require("../../controllers/company/companyAjaxController");

companyAjaxRoutes.route("/all-agents").post(companyAjaxController.allAgents);

module.exports = companyAjaxRoutes;

