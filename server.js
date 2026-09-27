//DNS CONNECTION FIX
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//DEPEND
const express = require("express")
const app = express()
require("dotenv").config()
require('./db/connection')
const PORT = process.env.PORT;


//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.json())

 // PORT
app.listen(PORT, ()=>{
    console.log(`Sever is running on port: http://localhost:${PORT}`)
})