
'use strict';

// Error - ErrorRead
function ErrorRead (message) {

  // Add Information
  this.name    = 'ErrorRead';
  this.type    = 'server';
  this.status  = 500;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorRead;