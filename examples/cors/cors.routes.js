
'use strict';

// Modules
var cors_middleware = require('./cors.middleware.js');

// Exports
module.exports = function (app) {

  // GET Request
  app.get('/cors', [
    cors_middleware,
    function (req, res, next) {
      res.status(200);
      res.send({
        cors : 'successful'
      });
    }
  ]);

  // POST Request (with pre-flight OPTIONS)
  app.options('/cors', cors_middleware);
  app.post('/cors', [
    cors_middleware,
    function (req, res, next) {
      res.status(200);
      res.send({
        api  : 'posted',
        data : req.body.data
      });
    }
  ]);

};
