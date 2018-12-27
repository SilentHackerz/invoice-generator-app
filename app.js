const express = require("express");

const app = express();

const port = process.env.PORT || 1234;

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res,next){

    res.sendFile(__dirname + '/public');
});



app.listen(port,function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Server connected at port :"+port);
    }
})