
'use strict';

// Modules
var controller_response    = require('../controllers/response.controller.js');
var controller_auth        = require('../controllers/authentication.controller.js');
var controller_boilerplate = require('../controllers/boilerplate.controller.js');

// Exports
module.exports = function (app, io) {

  // GET Request
  app.get('/boilerplate', [
    controller_boilerplate.say_hello,
    controller_response.success
  ]);

  // POST Request
  app.post('/boilerplate', [
    controller_boilerplate.process_post,
    controller_response.success
  ]);

  // DELETE Request (for Method Override test)
  app.delete('/boilerplate', [
    controller_boilerplate.mark_deleted,
    controller_response.success
  ]);

  // Error Examples
  app.get('/boilerplate-error-next', controller_boilerplate.error_next);
  app.get('/boilerplate-error-throw', controller_boilerplate.error_throw);

  // Protected Route
  app.get('/boilerplate-protected', [
    controller_auth.http_basic('bob', 'bobisthebest'),
    controller_boilerplate.show_secret_info,
    controller_response.success
  ]);

  // View
  app.get('/boilerplate-view', [
    controller_boilerplate.show_view,
    controller_response.success
  ]);

};
