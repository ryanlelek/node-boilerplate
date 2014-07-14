
'use strict';

// Modules
var controller_response    = require('../controllers/response.controller.js');
var controller_auth        = require('../controllers/authentication.controller.js');
var controller_boilerplate = require('../controllers/boilerplate.controller.js');

// Exports
module.exports = function (app) {

  // GET Request
  app.get('/boilerplate', [
    controller_boilerplate.say_hello,
    controller_response.success
  ]);

  // POST Request
  app.post('/boilerplate', [
    function (req, res, next) {
      // Return POST body (from JSON)
      res.locals = req.body;
      res.locals.processed = true;
      next();
    },
    controller_response.success
  ]);

  // DELETE Request (for Method Override test)
  app.delete('/boilerplate', [
    controller_boilerplate.mark_deleted,
    controller_response.success
  ]);

  // Error Examples
  app.get('/boilerplate-error-next', function (req, res, next) {
    next(new Error('Next Error'));
  });
  app.get('/boilerplate-error-throw', function (req, res, next) {
    throw new Error('Throw Error');
  });

  // Protected Route
  app.get('/boilerplate-protected', [
    controller_auth.http_basic('bob', 'bobisthebest'),
    function (req, res, next) {
      res.locals.secret = 'sauce';
      next();
    },
    controller_response.success
  ]);

  // View
  app.get('/boilerplate-view', function (req, res, next) {
    res.render('index', { title : 'MyCustomTitle' });
  });

};
