const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.set("view engine","ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(3000,()=>{
    console.log("Server is Running");
})
