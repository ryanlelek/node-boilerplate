
'use strict';

// Modules
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');

var config = {
  server : {
    port : 3000
  }
};

// Exports
module.exports = {

  global : function (app, environment) {

    if (!environment) { environment = 'PRODUCTION'; }

    // Set Port
    app.set('port', config.server.port);

    // Log Requests
    if (environment === 'DEVELOPMENT') {
      console.log('Starting Logger...');
      // Long version of { format : 'dev' }
      app.use(logger({ format : ':date :remote-addr :method :status :url' }));
    }

    // Accept Method Overrides
    // in order to be compatible
    // with limited clients/browsers
    app.use(method_override('_method'));

    // Parse POST/PUT Body
    app.use(body_parser.json());

    return environment;

  }

};
