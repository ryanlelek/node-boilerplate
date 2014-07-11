
'use strict';

// Modules
require('should');

// Subject
var error_save = require('../../../app/errors/save.error.js');

describe('Error - ErrorSave', function () {

  it('should have a name of "ErrorSave"', function () {
    new error_save().should.have.property('name').and.equal('ErrorSave');
  });

  it('should have a type of "server"', function () {
    new error_save().should.have.property('type').and.equal('server');
  });

  it('should have a status of 500', function () {
    new error_save().should.have.property('status').and.equal(500);
  });

  it('should have a message only when one is provided', function () {
    new error_save().should.not.have.property('message');
    new error_save('My Message').should.have.property('message').and.equal('My Message');
  });

});