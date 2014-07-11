
'use strict';

// Modules
require('should');

// Subject
var error_conflict = require('../../../app/errors/conflict.error.js');

describe('Error - ErrorConflict', function () {

  it('should have a name of "ErrorConflict"', function () {
    new error_conflict().should.have.property('name').and.equal('ErrorConflict');
  });

  it('should have a type of "client"', function () {
    new error_conflict().should.have.property('type').and.equal('client');
  });

  it('should have a status of 409', function () {
    new error_conflict().should.have.property('status').and.equal(409);
  });

  it('should have a message only when one is provided', function () {
    new error_conflict().should.not.have.property('message');
    new error_conflict('My Message').should.have.property('message').and.equal('My Message');
  });

});