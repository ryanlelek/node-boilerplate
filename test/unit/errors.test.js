
'use strict';

// Modules
require('should');

// Subject
var errors = require('../../app/errors.js');

describe('Errors', function () {

  describe('.not_found()', function () {

    it('should return a status code of 404', function () {
      errors.not_found({}, {
        send : function (code, data) {
          code.should.be.type('number').and.equal(404);
        }
      });
    });

  });

  describe('.server_error()', function () {

    it('should return a status code of 500', function () {
      errors.server_error(new Error(), {}, {
        send : function (code, data) {
          code.should.be.type('number').and.equal(500);
        }
      });
    });

  });

});
