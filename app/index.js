
'use strict';

// Modules
var express             = require('express');
var logger              = require('morgan');
var body_parser         = require('body-parser');
var method_override     = require('method-override');
var controller_response = require('./controllers/response.controller.js');
var config              = require('./config/index.js');

// New Express App
var app = express();

// Set Port
app.set('port', config.server.port);

// Log Requests
app.use(logger({ format: ':date :remote-addr :method :status :url' })); // 'dev'

// Accept Method Overrides
// in order to be compatible
// with limited clients/browsers
app.use(method_override('_method'));

// Parse POST/PUT Body
app.use(body_parser.json());

// Routes
require('./routes/boilerplate.routes.js') (app);
require('./routes/home.routes.js')        (app);

// Handle Errors
app.use(controller_response.not_found);
app.use(controller_response.failure);

// Export App
module.exports = app;
