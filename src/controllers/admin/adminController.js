module.exports = {
    index : (req, res)=>{
        res.status(200).render("admin/pages/index");
    },
    getLogin : (req, res)=>{
        res.status(200).render("admin/pages/login");
    },
    getCompanies : (req, res)=>{
        res.status(200).render("admin/pages/all-companies");
    },
    createCompany : (req, res)=>{
        res.status(200).render("admin/pages/create-company");
    },
    updateCompany : (req, res)=>{
        res.status(200).render("admin/pages/update-company");
    },
    companyRequest : (req, res)=>{
        res.status(200).render("admin/pages/company-requests");
    },
    numbers : (req, res)=>{
        res.status(200).render("admin/pages/numbers");
    },
    smsLogs : (req, res)=>{
        res.status(200).render("admin/pages/sms-logs");
    },
    callLogs : (req, res)=>{
        res.status(200).render("admin/pages/call-logs");
    },
    companyDetails : (req, res)=>{
        res.status(200).render("admin/pages/company-details");
    },
    agentLogs : (req, res)=>{
        res.status(200).render("admin/pages/agent-logs");
    },
    editAgent : (req, res)=>{
        res.status(200).render("admin/pages/edit-agent");
    }
}