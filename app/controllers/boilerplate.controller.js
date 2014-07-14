
'use strict';

function say_hello (req, res, next) {
  // Add data to response
  res.locals.hello = 'goodbye';
  next();
}

function mark_deleted (req, res, next) {
  res.locals.deleted = true;
  next();
}

// Exports
module.exports = {
  say_hello    : say_hello,
  mark_deleted : mark_deleted
};
