
'use strict';

// Modules
var http = require('http');
var app  = require('./index.js');

// HTTP Server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port', app.get('port'));
});
