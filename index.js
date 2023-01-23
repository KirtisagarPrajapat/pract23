var express = require("express")
var app = express()
var http = require("http").Server(app)

http.listen(9000,()=>{
    
    console.log("connect db now")
    console.log("running on 9000")
})