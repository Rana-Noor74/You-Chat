const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const numberService = require("./numberService");

const numberSchema = new mongoose.Schema({
    number : {
        type : String
    },
    country : {
        type : String
    },
    companyDocId : {
        type : String
    },
    access : {
        type : String
    },
    created_At : {
        type : Date
    },
    loginDocId : {
        type : String
    },
    services : {
        type : mongoose.ObjectId,
        ref : numberService
    }
});

const numberModel = new mongoose.model("Number", numberSchema);
module.exports = numberModel;