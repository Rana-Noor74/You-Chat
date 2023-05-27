module.exports = {
    index : (req, res) =>{
        res.status(200).render("pages/index");
    },
    login : (req, res) =>{
        res.status(200).render("pages/login");
    },
    lockScreen : (req, res) =>{
        res.status(200).render("pages/lock-screen");
    },
};