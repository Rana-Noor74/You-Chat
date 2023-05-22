const adminDB = require("../../db/admin/adminQueries");

module.exports = {
    searchNumber : adminDB.searchNumberApi,
    buyNumber : adminDB.buyNumberApi,
    createCompany : adminDB.createCompanyQuery,
    updateCompany : adminDB.updateCompanyQuery,
    getAllCompanies : adminDB.getAllCompanies,
}