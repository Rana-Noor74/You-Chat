const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConnect = require("./src/db/connection");
const appStart = require("./src/app.js");
const user = require("./src/routes/user/userRoutes");
const admin = require("./src/routes/admin/adminRoutes");
const company = require("./src/routes/company/companyRoutes");
const userAjax = require("./src/routes/user/userAjaxRoutes");
const adminAjax = require("./src/routes/admin/adminAjaxRoutes");
const companyAjax = require("./src/routes/company/companyAjaxRoutes");

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

//listening Server
if(process.env.SERVER_TYPE == "STAGING"){
  appStart();
}else{
  console.log("Deploy Project");
};
