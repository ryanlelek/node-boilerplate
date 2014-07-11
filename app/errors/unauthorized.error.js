
'use strict';

// Error - ErrorUnauthorized
function ErrorUnauthorized (message) {

  // Add Information
  this.name    = 'ErrorUnauthorized';
  this.type    = 'client';
  this.status  = 401;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorUnauthorized;