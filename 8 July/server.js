var express=require('express');
var PORT=8080;

var app=express();


app.use(express.static('./public'));

app.use(function(req,res){
	res.sendFile(__dirname+'/public/index.html');
})
app.listen(PORT,function(err){
	console.log(err||('Running @ '+PORT));
});