'use strict';
var express = require('express');
var app = express();
var http = ('http');
var bodyParser = require('body-parser');

//parses urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

//parses JSON
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 8080; //sets port

//Routes for API
var router = express.Router();


//register Routes, prefixing them with /API
app.use('/api', router);

//start server
app.listen(port);
console.log('Behold my wonder on port ' + port);
