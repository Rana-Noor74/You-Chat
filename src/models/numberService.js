const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const numberServicesSchema = new mongoose.Schema({
    numberDocId : {
        type : String
    },
    smsService : {
        type : Boolean,
    },
    callService : {
        type : Boolean,
    },
    mmsService : {
        type : Boolean,
    }
});

const numberService = mongoose.model("NumberService", numberServicesSchema);
module.exports = numberService;