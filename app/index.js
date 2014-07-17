
'use strict';

// Modules
var express             = require('express');
var socketio            = require('socket.io');
var config              = require('./config.js');
var controller_response = require('./controllers/response.controller.js');

// New Express App
var app = express();

// TODO: Add configuration option
// Add WebSockets
var io = socketio();
app.socketio = io;

// Global Settings
config.global(app, process.env);

// TODO: Add configuration option
// Serve static files before the routes
// app.use(express.static(__dirname + '/../public')));

// Routes
require('./routes/boilerplate.routes.js') (app, io);
require('./routes/main.routes.js')        (app, io);
require('./routes/socket.routes.js')      (app, io);

// Handle Errors
app.use(controller_response.not_found);
app.use(controller_response.failure);

// Export App
module.exports = app;
