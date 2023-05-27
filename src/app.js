const express = require("express");
const app = express();
const dbConnect = require("./db/connection");
const port = process.env.SERVER_TYPE == "STAGING" ? Number(process.env.LOCAL_PORT) :  Number(process.env.SERVER_PORT);


//server starting
const start = async ()=>{
    try{
      //connecting db
      await dbConnect();
      //server defining
      app.listen(port, ()=>{
        console.log(`localhost:${port}`);
      });
    }catch (error){
      console.log(error);
    };
};

module.exports = start;
