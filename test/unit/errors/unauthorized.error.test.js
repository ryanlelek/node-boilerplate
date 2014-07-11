
'use strict';

// Modules
require('should');

// Subject
var error_unauthorized = require('../../../app/errors/unauthorized.error.js');

describe('Error - ErrorUnauthorized', function () {

  it('should have a name of "ErrorUnauthorized"', function () {
    new error_unauthorized().should.have.property('name').and.equal('ErrorUnauthorized');
  });

  it('should have a type of "client"', function () {
    new error_unauthorized().should.have.property('type').and.equal('client');
  });

  it('should have a status of 401', function () {
    new error_unauthorized().should.have.property('status').and.equal(401);
  });

  it('should have a message only when one is provided', function () {
    new error_unauthorized().should.not.have.property('message');
    new error_unauthorized('My Message').should.have.property('message').and.equal('My Message');
  });

});