
'use strict';

// Modules
var express         = require('express');
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');
var basic_auth      = require('basic-auth');

// New Express App
var app = express();

// Set Port
app.set('port', 8888);

// Log Requests
app.use(logger({ format: ':date :remote-addr :method :status :url' })); // 'dev'

// HTTP Basic Auth
// TODO: Make module of this (return true/false)
var valid_username = 'bob';
var valid_password = 'bobisthebest';
function authentication_required (req, res, next) {
  var credentials = basic_auth(req);
  if (credentials !== undefined) {
    if (credentials.name && credentials.name === valid_username) {
      if (credentials.pass && credentials.pass === valid_password) {
        return next();
      }
    }
  }
  res.set('WWW-Authenticate', 'Basic');
  res.send(401, { error : { message : 'Authentication Failed' } });
}

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
app.get('/protected', authentication_required, function (req, res, next) {
  res.send(200, { secret : 'sauce' });
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
