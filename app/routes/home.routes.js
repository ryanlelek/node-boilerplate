
'use strict';

// Modules
var controller_response = require('../controllers/response.controller.js');

// Exports
module.exports = function (app) {

  // GET Request
  app.get('/', [
    function (req, res, next) {
      // Add data to response
      res.locals.page = 'home';
      next();
    },
    controller_response.success
  ]);

};
