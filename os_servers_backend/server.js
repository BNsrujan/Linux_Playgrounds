
var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
const fetch =(...args) =>
    import("node-fetch").then(({default:fetch})=> fetch(...args));


const CLIENT_ID = "Ov23liD3eIcND845yFNY";
const CLIENT_SECRET = "dda6f76a145faed0b7a50cca8127b93ef49ce73a";


var app = express();


app.use(cors());
app.use(bodyParser.json());

app.get("/getAccessToken",async function(req,res){
    console.log(req.query.code);
 
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
 
    await fetch("https://github.com/login/oauth/access_token" + params,{
        method :"POST",
        headers : {
            "Accept" : "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        res.json(data);
    });                   
})

app.get("/getUserata", async function(req,res){
    req.get("Authorization");
    await  fetch("https://api.github.com/user",{
        method:"GET",
        headers : {
            "Authorization" : req.get("Authorization") 
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        res.json(data);
    })
})


app.listen(5175,function (){
    console.log("port is running at 5173")
});