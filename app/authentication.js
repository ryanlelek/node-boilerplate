
'use strict';

// Modules
var basic_auth = require('basic-auth');

// Exports
module.exports = {
  authentication_required : authentication_required
};

// Instead, make to return true/false
// Also allow multiple users / methods
function authentication_required (username, password) {
  return function (req, res, next) {
    var credentials = basic_auth(req);
    if (credentials !== undefined) {
      if (credentials.name && credentials.name === username) {
        if (credentials.pass && credentials.pass === password) {
          return next();
        }
      }
    }
    res.set('WWW-Authenticate', 'Basic');
    res.send(401, { error : { message : 'Authentication Failed' } });
  };
}
