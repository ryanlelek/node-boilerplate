"use strict";

// Will echo back headers to be used for
// demonstration and debugging purposes
function headers(req, res, next) {
  console.log("HTTP Headers", req.headers);
  res.locals.headers = req.headers;
  next();
}

// Exports
module.exports = {
  headers: headers,
};
