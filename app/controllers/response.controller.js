
'use strict';

module.exports = {

  success : function (req, res, next) {

    res.send(200, res.locals);

  },

  // No Route Found
  // Second to last route (non-error catchall)
  // Do not call next(), just respond
  not_found : function (req, res, next) {

    res.send(404, {
      error : {
        name    : 'ErrorNotFound',
        type    : 'client',
        message : 'Resource was not found',
        method  : req.method,
        path    : req.path
      }
    });

  },

  // Always keep this as the last middleware
  // It uses 4 arguments to signify it is an error handler
  failure : function (error, req, res, next) {

    // If it's an error from our app
    // Send a response with the information
    if (error.status) {

      res.send(error.status, {
        error : {
          type    : error.type,
          name    : error.name,
          message : error.message,
          data    : error.data
        }
      });

    } else {

      // Generic Catch-all
      res.send(500, {
        error : {
          type    : 'server',
          name    : error.name,
          message : error.message
        }
      });

    }

    // Do not call next()
    // unless you have a middleware ready
    // to handle this and/or send to a service
    // next(error);

  }

};
