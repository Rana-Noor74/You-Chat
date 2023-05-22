module.exports = {
    getUserDetail : async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
        await res.send({
            "name" : "Mark Williams",
            "email" : "mark98@gmail.com",
            "password" : "Agent-596"
        });
    }
}