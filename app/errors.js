
'use strict';

// Exports
module.exports = {
  not_found    : not_found,
  server_error : server_error
};

// No Route Found
// Second to last route (non-error catchall)
// Do not call next(), just respond
function not_found (req, res, next) {
  res.send(404, {
    path   : req.path,
    method : req.method
  });
}

// Always keep this as the last middleware
// It uses 4 arguments to signify it is an error handler
function server_error (error, req, res, next) {

  // Send Response
  res.send(500, {
    error : {
      name    : error.name,
      message : error.message
    }
  });

  // Do NOT call next() here unless you
  // have additional error handlers to call
  // Example: Error Logging Service API call

}
