
'use strict';

// Modules
var express = require('express');
var logger  = require('morgan');

// New Express App
var app = express();

// Set Port
app.set('port', 6789);

// Log Requests
app.use(logger({ format: ':date :remote-addr :method :status :url' })); // 'dev'

// Routes
app.get('/', function (req, res, next) {
  res.send({ hello : 'goodbye' });
});

// Export App
module.exports = app;
