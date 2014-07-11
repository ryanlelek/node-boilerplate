
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

    it('should return the error status code when set', function () {
      var error = new Error();
      error.status = 123;
      controller_response.failure(error, {}, {
        send : function (status, data) {
          status.should.equal(123);
        }
      });
    });

    it('should return a 500 status code by default', function () {
      var error = new Error();
      controller_response.failure(error, {}, {
        send : function (status, data) {
          status.should.equal(500);
        }
      });
    });

    it('should return a error object in the response body', function () {
      var error = new Error();
      controller_response.failure(error, {}, {
        send : function (status, data) {
          data.should.have.property('error').and.be.type('object');
        }
      });
    });

    it('should return the error type when present', function () {
      var error = new Error();
      error.type = 'something';
      controller_response.failure(error, {}, {
        send : function (status, data) {
          data.error.should.have.property('type').and.equal('something');
        }
      });
    });

    it('should return a "server" error type by default', function () {
      var error = new Error();
      controller_response.failure(error, {}, {
        send : function (status, data) {
          data.error.should.have.property('type').and.equal('server');
        }
      });
    });

    it('should not have a data property by default', function () {
      var error = new Error();
      controller_response.failure(error, {}, {
        send : function (status, data) {
          data.error.should.not.have.property('data');
        }
      });
    });

    it('should send the error data when present', function () {
      var error = new Error();
      error.data = 'some-data';
      controller_response.failure(error, {}, {
        send : function (status, data) {
          data.error.should.have.property('data').and.equal('some-data');
        }
      });
    });

  });

});
