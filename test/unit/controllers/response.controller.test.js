
'use strict';

// Modules
require('should');

// Subject
var controller_response = require('../../../app/controllers/response.controller.js');

describe('Controller - Response', function () {

  describe('.success()', function () {

    it('should return a 200 status code and res.locals data when successful', function (done) {

      var req = {};
      var res = {
        locals : { key1 : 'value1', key2 : 'value2' },
        send   : function (status, data) {
          status.should.equal(200);
          data.should.have.property('key1').and.equal('value1');
          data.should.have.property('key2').and.equal('value2');
          return done();
        }
      };

      controller_response.success(req, res);

    });

  });

  describe('.not_found()', function () {

    it('should return a 404 status code when route not found', function (done) {

      var req = {};
      var res = {
        send : function (status, data) {
          status.should.equal(404);
          data.should.have.property('error');
          data.error.should.have.property('name').and.equal('ErrorNotFound');
          data.error.should.have.property('type').and.equal('client');
          data.error.should.have.property('message').and.equal('Resource was not found');
          done();
        }
      };

      controller_response.not_found(req, res);

    });

  });

  describe('.failure()', function () {

    it('should return the given status code and the error object when we encounter an error', function (done) {

      var error = { status : 123456, type : 'server', name : 'SomeError', message : 'Only select properties', data : 'some-data' };
      var req = {};
      var res = {
        send : function (status, data) {
          status.should.equal(123456);
          // TODO: This needs certain properties and they can't be ommitted
          data.should.have.property('error').and.eql({
            type    : 'server',
            name    : 'SomeError',
            message : 'Only select properties',
            data    : 'some-data'
          });
          return done();
        }
      };

      controller_response.failure(error, req, res, function () {});

    });

    it('should return a generic 500 status code when error.status is not present', function (done) {
      var error = new Error('Generic error message');
      var req = {};
      var res = {
        send : function (status, data) {
          status.should.equal(500);
          data.should.have.property('error').and.eql({
            type    : 'server',
            name    : 'Error',
            message : 'Generic error message'
          });
          done();
        }
      };

      controller_response.failure(error, req, res, function () {});

    });

  });

});
