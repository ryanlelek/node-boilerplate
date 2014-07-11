
'use strict';

// Error - ErrorSave
function ErrorSave (message) {

  // Add Information
  this.name    = 'ErrorSave';
  this.type    = 'server';
  this.status  = 500;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorSave;