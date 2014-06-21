
'use strict';

// Modules
var express = require('express');

// New Express App
var app = express();

// Configure App
app.set('port', 6789);

// Routes
app.get('/', function (req, res, next) {
  res.send({ hello : 'goodbye' });
});

// Export App
module.exports = app;
