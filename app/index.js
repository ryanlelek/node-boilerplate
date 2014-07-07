
'use strict';

// Modules
var express         = require('express');
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');

// Custom Modules
var errors = require('./errors.js');
var auth   = require('./authentication.js');

// New Express App
var app = express();

// Set Port
app.set('port', 8888);

// Log Requests
app.use(logger({ format: ':date :remote-addr :method :status :url' })); // 'dev'

// Accept Method Overrides
// in order to be compatible
// with limited clients/browsers
app.use(method_override('_method'));

// Parse POST/PUT Body
app.use(body_parser.json());

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

// DELETE Request (for Method Override test)
app.delete('/', function (req, res, next) {
  res.send(200, { deleted : true });
});

// Error Examples
app.get('/error-next', function (req, res, next) {
  next(new Error('Next Error'));
});
app.get('/error-throw', function (req, res, next) {
  throw new Error('Throw Error');
});

// Protected Route
app.get('/protected',
  auth.authentication_required('bob', 'bobisthebest'),
  function (req, res, next) {
    res.send(200, { secret : 'sauce' });
  }
);

// Handle Errors
app.use(errors.not_found);
app.use(errors.server_error);

// Export App
module.exports = app;
