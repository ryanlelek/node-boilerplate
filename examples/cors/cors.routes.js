
'use strict';

// Modules
var cors = require('cors');

// Configure CORS
var cors_whitelist = [
  'http://local.example.com',
  'https://local.example.com'
];
var cors_options   = {
  origin : function (origin, callback) {
    console.log(origin);
    var origin_allowed = cors_whitelist.indexOf(origin) !== -1;
    callback(null, origin_allowed);
  }
};

module.exports = function (app) {

  app.get('/public-api-cors', cors(cors_options), function (req, res, next) {
    console.log(req.headers);
    res.send(200, { api : 'online' });
  });

  app.options('/public-api-cors', cors(cors_options));
  app.post('/public-api-cors', cors(cors_options), function (req, res, next) {
    console.log(req.headers);
    res.send(200, { api : 'posted', data : req.body.data });
  });

};
