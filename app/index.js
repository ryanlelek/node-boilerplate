
'use strict';

// Modules
var express             = require('express');
var config              = require('./config/index.js');
var controller_response = require('./controllers/response.controller.js');

// New Express App
var app = express();

// Global Settings
config.global(app, process.env.NODE_ENV);

// Routes
require('./routes/boilerplate.routes.js') (app);
require('./routes/home.routes.js')        (app);

// Handle Errors
app.use(controller_response.not_found);
app.use(controller_response.failure);

// Export App
module.exports = app;
