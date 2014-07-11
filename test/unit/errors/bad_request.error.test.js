
'use strict';

// Modules
require('should');

// Subject
var error_bad_request = require('../../../app/errors/bad_request.error.js');

describe('Error - ErrorBadRequest', function () {

  it('should have a name of "ErrorBadRequest"', function () {
    new error_bad_request().should.have.property('name').and.equal('ErrorBadRequest');
  });

  it('should have a type of "client"', function () {
    new error_bad_request().should.have.property('type').and.equal('client');
  });

  it('should have a status of 400', function () {
    new error_bad_request().should.have.property('status').and.equal(400);
  });

  it('should have a message only when one is provided', function () {
    new error_bad_request().should.not.have.property('message');
    new error_bad_request('My Message').should.have.property('message').and.equal('My Message');
  });

});