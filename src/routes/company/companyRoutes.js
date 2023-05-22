const express = require("express");
const companyRoutes = express.Router();
const companyController = require("../../controllers/company/companyController");

companyRoutes.route("/").get(companyController.index);
companyRoutes.route("/login").get(companyController.getLogin);
companyRoutes.route("/sms-logs").get(companyController.smsLogs);
companyRoutes.route("/call-logs").get(companyController.callLogs);
companyRoutes.route("/make-request").get(companyController.makeRequest);
companyRoutes.route("/edit-agent").get(companyController.editAgent);

module.exports = companyRoutes;
