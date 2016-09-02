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

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+ '/index.html'));
});

var port = process.env.PORT || 9876; //sets port

//Routes for API
var router = express.Router();


//register Routes, prefixing them with /API
app.use('/api', router);

//start server
app.listen(port);
console.log('Behold my wonder on port ' + port);
