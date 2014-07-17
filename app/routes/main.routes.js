
'use strict';

// Modules
var controller_response = require('../controllers/response.controller.js');
var controller_main     = require('../controllers/main.controller.js');

// Exports
module.exports = function (app, io) {

  // GET Request
  app.get('/', [
    controller_main.home,
    controller_response.success
  ]);

};
