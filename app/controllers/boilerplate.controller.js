
'use strict';

function say_hello (req, res, next) {
  // Add data to response
  res.locals.hello = 'goodbye';
  next();
}

// Exports
module.exports = {
  say_hello : say_hello
};
