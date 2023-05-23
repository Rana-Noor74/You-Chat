const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../../controllers/admin/adminController");

adminRoutes.route("/").get(adminController.index);
adminRoutes.route("/login").get(adminController.getLogin);
adminRoutes.route("/all-companies").get(adminController.getCompanies);
adminRoutes.route("/create-company").get(adminController.createCompany);
adminRoutes.route("/update-company/:companyDocId").get(adminController.updateCompanyInfo);
adminRoutes.route("/companies-requests").get(adminController.companyRequest);
adminRoutes.route("/numbers").get(adminController.numbers);
adminRoutes.route("/sms-logs").get(adminController.smsLogs);
adminRoutes.route("/call-logs").get(adminController.callLogs);
adminRoutes.route("/company-details").get(adminController.companyDetails);
adminRoutes.route("/company/agent-logs").get(adminController.agentLogs);
adminRoutes.route("/company/edit-agent").get(adminController.editAgent);

module.exports = adminRoutes;