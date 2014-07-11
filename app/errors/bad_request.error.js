
'use strict';

// Error - ErrorBadRequest
function ErrorBadRequest (message) {

  // Add Information
  this.name    = 'ErrorBadRequest';
  this.type    = 'client';
  this.status  = 400;
  if (message) {
    this.message = message;
  }

}

// Export
module.exports = ErrorBadRequest;