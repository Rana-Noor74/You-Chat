const express = require("express");
const adminAjaxRoutes =  express.Router();
const adminAjaxController = require("../../controllers/admin/adminAjaxController");

adminAjaxRoutes.route("/search-number").post(adminAjaxController.searchNumber);
adminAjaxRoutes.route("/buy-number").post(adminAjaxController.buyNumber);
adminAjaxRoutes.route("/create-company").post(adminAjaxController.createCompany);
adminAjaxRoutes.route("/update-company").post(adminAjaxController.updateCompany);
adminAjaxRoutes.route("/getAll-companies/").get(adminAjaxController.getAllCompanies);

module.exports = adminAjaxRoutes;

