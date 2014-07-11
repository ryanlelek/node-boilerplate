
'use strict';

// Error - ErrorNotFound
function ErrorNotFound (message, data) {

  // Add Information
  this.name    = 'ErrorNotFound';
  this.type    = 'client';
  this.status  = 404;

  if (message) {
    this.message = message;
  }

  if (data) {
    this.data = {};
    if (data.method) { this.data.method = data.method; }
    if (data.path)   { this.data.path   = data.path;   }
  }

}

// Export
module.exports = ErrorNotFound;