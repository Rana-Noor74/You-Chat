//requiring modules
const mongoose = require("mongoose");
const uri = process.env.DATABASE_KEY;
//createing connection
const connectDB = ()=>{
    try{
        console.log("Starting a connection");
        return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log("Database connected successfully.");
        }).catch((error)=>{
            console.log(error);
            console.log("Database connectivity issue occures.");
        });
    }catch (error) {
        console.log(error);
        console.log("Database connectivity issue occures.");
    };
};

module.exports = connectDB;