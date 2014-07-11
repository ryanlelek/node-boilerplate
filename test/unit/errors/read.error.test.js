
'use strict';

// Modules
require('should');

// Subject
var error_read = require('../../../app/errors/read.error.js');

describe('Error - ErrorRead', function () {

  it('should have a name of "ErrorRead"', function () {
    new error_read().should.have.property('name').and.equal('ErrorRead');
  });

  it('should have a type of "server"', function () {
    new error_read().should.have.property('type').and.equal('server');
  });

  it('should have a status of 500', function () {
    new error_read().should.have.property('status').and.equal(500);
  });

  it('should have a message only when one is provided', function () {
    new error_read().should.not.have.property('message');
    new error_read('My Message').should.have.property('message').and.equal('My Message');
  });

});