//requiring models
const company = require("../../models/company");
const number = require("../../models/number");
const numberService = require("../../models/numberService");

module.exports = {
    createCompanyQuery : async (req, res)=>{
        try {
            let companyObject = {
                "name" : req.body.companyName,
                "email" : req.body.companyEmail,
                "password" :  req.body.companyPassword,
                "smsLimit" : req.body.companySMSLimit,
                "callService" :  req.body.companyCallService,
                "smsService" : req.body.companySMSService,
                "created_At" : new Date(),
                "status" : true,
            };
            await company.collection.insertOne(companyObject).then(async (doc)=>{
                console.log(doc);
                await res.send({"success" : 1, "message" : "Company Created Successfully!"});
            });
        } catch (error) {
            console.log(error);
            res.send({"success" : 0, "message" : error.message});
        };
    },
    getCompanyInfo : async (req, res)=>{
        let companyDocId = req.params.companyDocId;
        const companyDocData = await company.findById(companyDocId).exec();
        await res.status(200).render("admin/pages/update-company", {data : companyDocData});
    },
    updateCompany : async (req, res)=>{
        let companyName = req.body.newCompanyName;
        let companyEmail = req.body.newCompanyEmail;
        let companyPassword = req.body.newCompanyPassword;
        let companySMSLimit = req.body.newCompanySMSLimit;
        let companyCallService = req.body.newCompanyCallService;
        let companySMSService = req.body.newCompanySMSService;
        let companyDocId = req.body.companyDocId;
        console.log(companyDocId);
        company.findByIdAndUpdate(companyDocId, {
            name : companyName,
            email : companyEmail,
            password : companyPassword,
            smsLimit : companySMSLimit,
            callService : companyCallService,
            smsService : companySMSService,
            updated_At : new Date(),
        }, {new: true}).then(async (docs)=>{
            //{new : true} always return the updated document.
            // console.log(docs);  
            await res.status(200).send({"success" : 1, "message" : "Company is up-to-date"});
        }).catch((error)=>{
            res.status(200).send({"success" : 0, "message" : "Fail to update the company"});
        });
    },
    searchNumberApi : async (req, res)=>{
        const url = req.body.url;
        const numberArray = [
            {"number" : "17865790538", "countryCode" : "US"},
            {"number" : "44842785095", "countryCode" : "GB"},
            {"number" : "610387690234", "countryCode" : "AU"},
            {"number" : "356549098876", "countryCode" : "DM"},
            {"number" : "457811233246", "countryCode" : "NL"},
            {"number" : "18640906578", "countryCode" : "US"},
            {"number" : "447675654545", "countryCode" : "GB"},
            {"number" : "16579812099", "countryCode" : "CD"},
            {"number" : "61469090878", "countryCode" : "AU"},
            {"number" : "35897445332", "countryCode" : "NL"},
        ];
        await res.status(200).send({"success" : 1, "message" : numberArray});
    },
    buyNumberApi : async (req, res)=>{
        const numbersArray = req.body.numbersArray;
        // for(let i=0; i < numbersArray.length; i++){
        //     let number = numbersArray[i].number;
        //     let countryCode = numbersArray[i].countryCode;
        //     console.log({ "number": number, "countryCode": countryCode, "billingIntervalMonths": 1 });
        //     if(i == ((numbersArray.length)-1)){
        //         setTimeout(()=>{
        //             res.status(200).send({"success" : 1, "message" : "Numbers Are Buyed SuccessFully"});
        //         }, 5000);
        //     };
        // };
        // let numberObject = {
        //     number : "+17865780409",
        //     country : "US",
        //     access : "US",
        //     created_At : new Date(),
        //     companyDocId : "",
        //     loginDocId : "",
        // };
        // await number.collection.insertOne(numberObject).then((docs)=>{
        //     console.log(docs);
        //     let numberDocId = docs.insertedId._id
        //     console.log(numberDocId);
        //     numberService.collection.insertOne({
        //         numberDocId : numberDocId,
        //         callService : true,
        //         smsService : true,
        //         mmsService : true
        //     }).then((abc)=>{
        //         console.log(abc);
        //     });
        // });
        // var abc = "646e9e329bbe16a4b8ae4496"
        // var xyz = await numberService.findById(abc).exec();
        // console.log(xyz.numberDocId);
        // console.log(xyz._id);
    },
    getAllCompanies : async (req, res)=>{
        try {
            const allCompanies = await company.find({}).sort({"created_At" : 1});
            await res.send({"success" : 1, "message" : allCompanies});
        } catch (error) {
            console.log(error);
            res.send({"success" : 0, "message" : error.messsage});
        };
    },
};