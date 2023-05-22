module.exports = {
    allAgents : async (req, res)=>{
        const companyDocId = req.body.companyDocId;
        console.log(companyDocId)
        await res.status(200).send({
            "agents" : [
                "Kate Martin", 
                "Miranda Cohen", 
                "Damian Convey",
                "Kate Martin", 
                "Miranda Cohen", 
                "Kate Martin",
                "Kate Martin", 
                "Miranda Cohen", 
                "Kate Martin", 
            ],
        });
    }
}