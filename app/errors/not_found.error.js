
'use strict';

// Error - ErrorNotFound
function ErrorNotFound (message) {

  // Add Information
  this.name    = 'ErrorNotFound';
  this.type    = 'client';
  this.status  = 404;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorNotFound;