//company schema will goes here;
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Company_Name should be provided."],
        minlength : 3,
        maxlength : 25,
    },
    email : {
        type : String,
        required : [true, "Company_Email should be provided."],
    },
    password : {
        type : String,
        required : true,
    },
    smsLimit : {
        type : Number,
        default : 500,
    },
    callService : {
        type : Boolean,
        default : true
    },
    smsService : {
        type : Boolean,
        default : true,
    },
    status : {
        type : Boolean,
        default : true,
    },
    created_At : {
        type : Date,
        default : Date.now(),
    },
});

const companyModel = mongoose.model("Companie", companySchema);

module.exports = companyModel;