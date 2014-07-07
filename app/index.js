
'use strict';

// Modules
var express         = require('express');
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');

// Custom Modules
var errors = require('./errors.js');

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

// Routes
require('./routes.boilerplate.js')(app);

// Handle Errors
app.use(errors.not_found);
app.use(errors.server_error);

// Export App
module.exports = app;
