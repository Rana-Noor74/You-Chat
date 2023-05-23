const adminDB = require("../../db/admin/adminQueries");

module.exports = {
    searchNumber : adminDB.searchNumberApi,
    buyNumber : adminDB.buyNumberApi,
    createCompany : adminDB.createCompanyQuery,
    updateCompany : adminDB.updateCompany,
    getAllCompanies : adminDB.getAllCompanies,
}