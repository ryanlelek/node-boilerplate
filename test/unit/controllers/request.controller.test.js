
'use strict';

// Modules
require('should');

// Subject
var controller_request = require('../../../app/controllers/request.controller.js');

describe('Controller - Request', function () {

  describe('.parameter_required()', function () {

    it('should return an error when the specified parameter is not provided', function () {

      controller_request.parameter_required('body', 'foo')({}, {}, function (error) {
        error.should.have.property('message').and.equal('Parameter "foo" is required');
      });

      controller_request.parameter_required('params', 'bar')({}, {}, function (error) {
        error.should.have.property('message').and.equal('Parameter "bar" is required');
      });

    });

    it('should continue when the specified parameter is provided', function () {

      var req_body = { body : { foo : 'value' } };
      controller_request.parameter_required('body', 'foo')(req_body, {}, function (error) {
        (error === undefined).should.equal(true);
      });

      var req_params = { params : { bar : 'value' } };
      controller_request.parameter_required('params', 'bar')(req_params, {}, function (error) {
        (error === undefined).should.equal(true);
      });

    });

  });

});
