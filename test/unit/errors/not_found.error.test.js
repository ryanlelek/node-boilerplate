
'use strict';

// Modules
require('should');

// Subject
var error_not_found = require('../../../app/errors/not_found.error.js');

describe('Error - ErrorNotFound', function () {

  it('should have a name of "ErrorNotFound"', function () {
    new error_not_found().should.have.property('name').and.equal('ErrorNotFound');
  });

  it('should have a type of "client"', function () {
    new error_not_found().should.have.property('type').and.equal('client');
  });

  it('should have a status of 404', function () {
    new error_not_found().should.have.property('status').and.equal(404);
  });

  it('should have a message only when one is provided', function () {
    new error_not_found().should.not.have.property('message');
    new error_not_found('My Message').should.have.property('message').and.equal('My Message');
  });

});