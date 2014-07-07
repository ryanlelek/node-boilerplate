
'use strict';

// Modules
var auth = require('./authentication.js');

// Exports
module.exports = function (app) {

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
  app.get('/protected',
    auth.authentication_required('bob', 'bobisthebest'),
    function (req, res, next) {
      res.send(200, { secret : 'sauce' });
    }
  );

};
