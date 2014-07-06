
'use strict';

// Modules
var express     = require('express');
var logger      = require('morgan');
var body_parser = require('body-parser');

// New Express App
var app = express();

// Set Port
app.set('port', 6789);

// Log Requests
app.use(logger({ format: ':date :remote-addr :method :status :url' })); // 'dev'

// Parse POST/PUT Body
app.use(body_parser());

// ### Routes ###

// GET Request
app.get('/', function (req, res, next) {
  // Return JSON object
  res.send(200, { hello : 'goodbye' });
});

// POST Request
app.post('/', function (req, res, next) {
  // Return POST body (from JSON)
  req.body.processed = true;
  res.send(200, req.body);
});

// Export App
module.exports = app;
