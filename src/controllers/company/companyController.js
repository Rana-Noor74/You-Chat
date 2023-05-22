module.exports = {
    index :  (req, res)=>{
        res.status(200).render("company/pages/index");
    },
    getLogin : (req, res)=>{
        res.status(200).render("company/pages/login");
    },
    smsLogs : (req, res)=>{
        res.status(200).render("company/pages/sms-logs");
    },
    callLogs : (req, res)=>{
        res.status(200).render("company/pages/call-logs");
    },
    makeRequest : (req, res)=>{
        res.status(200).render("company/pages/make-request");
    },
    editAgent : (req, res)=>{
        res.status(200).render("company/pages/edit-agent");
    },

}