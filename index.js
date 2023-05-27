const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConnect = require("./src/db/connection");
const user = require("./src/routes/user/userRoutes");
const admin = require("./src/routes/admin/adminRoutes");
const company = require("./src/routes/company/companyRoutes");
const userAjax = require("./src/routes/user/userAjaxRoutes");
const adminAjax = require("./src/routes/admin/adminAjaxRoutes");
const companyAjax = require("./src/routes/company/companyAjaxRoutes");
const port = process.env.SERVER_TYPE == "STAGING" ? Number(process.env.LOCAL_PORT) :  Number(process.env.SERVER_PORT);

//setting up the app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

//setting up the views and routes engine
app.set("view engine", "ejs");
app.use("/", user);
app.use("/admin", admin);
app.use("/company", company);
    
//ajax calling    
app.use("/user-ajax", userAjax);
app.use("/admin-ajax", adminAjax);
app.use("/company-ajax", companyAjax);

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

//listening Server
if(process.env.SERVER_TYPE == "STAGING"){
  start();
}else{
  console.log("Deploy Project");
};
