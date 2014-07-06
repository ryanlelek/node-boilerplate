
'use strict';

// Modules
var express         = require('express');
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');

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

// ### Handle Errors ###

// No Route Found
// Second to last route (non-error catchall)
// Do not call next(), just respond
app.use(function (req, res, next) {
  res.send(404, {
    path      : req.path,
    method    : req.method
  });
});

// Always keep this as the last middleware
// It uses 4 arguments to signify it is an error handler
app.use(function (error, req, res, next) {

  // Send Response
  res.send(500, {
    error : {
      name    : error.name,
      message : error.message
    }
  });

  // Do NOT call next() here unless you
  // have additional error handlers to call
  // Example: Error Logging Service API call

});

// Export App
module.exports = app;
