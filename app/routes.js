
'use strict';

// Exports
module.exports = function (app) {

  // GET Request
  app.get('/', function (req, res, next) {
    // Return JSON object
    res.send(200, { page : 'home' });
  });

};
