
'use strict';

// Modules
var cors = require('cors');

// Configure CORS
var whitelist = [
  'http://allowed.example.com',
  'https://allowed.example.com'
];

var options = {
  origin : function (origin, callback) {
    var origin_allowed = whitelist.indexOf(origin) !== -1;
    console.log('Origin Allowed?', origin, origin_allowed);
    callback(null, origin_allowed);
  }
};

// Returns Middleware
module.exports = cors(options);
