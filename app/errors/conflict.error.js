
'use strict';

// Error - ErrorConflict
function ErrorConflict (message) {

  // Add Information
  this.name    = 'ErrorConflict';
  this.type    = 'client';
  this.status  = 409;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorConflict;