var http = require('http');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var ola = [];

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();
app.listen(3000);
app.set('view engine','ejs');



app.get('/index',function(req ,res) {
    ola = [];
	res.render('profile', {ola : ola})

})

app.post('/index', urlencodedParser,function(req,res){
    var len = req.body.opc
    ola = [];
    for(i = 1; i <= len; i++){
        ola.push(i);
    }
	res.render('profile', {ola : ola})
    ola = [];
});
