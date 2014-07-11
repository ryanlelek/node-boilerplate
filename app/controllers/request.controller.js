
'use strict';

// Modules
var ErrorBadRequest = require('../errors/bad_request.error.js');

module.exports = {

  parameter_required : function (object, property) {

    return function (req, res, next) {
      // TODO: { class : 'parameter_required, data : 'email' }
      if ((!req[object]) || (!req[object][property])) { return next(new ErrorBadRequest('Parameter "' + property + '" is required')); }
      return next();
    };

  }

};
