
'use strict';

function home (req, res, next) {
  res.locals.page = 'home';
  next();
}

// Exports
module.exports = {
  home : home
};
