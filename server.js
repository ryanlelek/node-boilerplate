
'use strict';

// Modules
var http = require('http');
var app  = require('./app/index.js');

// HTTP Server
http.createServer(app).listen(app.get('port'), function () {
  console.log('---');
  console.log('HTTP Server Started');
  console.log('Mode:', app.get('env'));
  console.log('Port:', app.get('port'));
});
