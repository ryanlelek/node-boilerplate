
'use strict';

// Modules
var cors = require('cors');

// Configure CORS
var cors_whitelist = [
  'http://allowed.example.com',
  'https://allowed.example.com'
];

var cors_options = {
  origin : function (origin, callback) {
    var origin_allowed = cors_whitelist.indexOf(origin) !== -1;
    console.log('Origin Allowed', origin, origin_allowed);
    callback(null, origin_allowed);
  }
};

// Exports
module.exports = function (app) {

  // GET Request
  app.get('/cors', [
    cors(cors_options),
    function (req, res, next) {
      res.send(200, {
        cors : 'successful'
      });
    }
  ]);

  // POST Request (with pre-flight OPTIONS)
  app.options('/cors', cors(cors_options));
  app.post('/cors', [
    cors(cors_options),
    function (req, res, next) {
      res.send(200, {
        api  : 'posted',
        data : req.body.data
      });
    }
  ]);

};
