var exp=require('express');
var app=exp();
var react=require('react');
var rser=require('react-dom/server');
var index=require("./dynamic/index");
app.use("/static",exp.static("static"));
app.all('/',function(req,res,next){
    res.send(rser.renderToString(index));
});
app.listen(3000,function(){
    console.log("connected");
});