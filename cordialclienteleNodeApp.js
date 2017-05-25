var express = require('express');
var cordialApp = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var cookiParser = require('cookie-parser');

var port = process.env.PORT || 3030;

// Creating a Public container to hold all the necessary files
cordialApp.use('/cordialAssets',express.static(__dirname + '/public'));

cordialApp.get('/',(req,res)=>{
    console.log('Welcome to the CordialClientele Node Port');
});


cordialApp.listen(port);