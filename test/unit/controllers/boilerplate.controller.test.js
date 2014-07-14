
'use strict';

// Modules
require('should');

// Subject
var controller_boilerplate = require('../../../app/controllers/boilerplate.controller.js');

describe('Controller - Boilerplate', function () {

  describe('.say_hello()', function () {

    it('should add a "hello" property to res.locals', function () {
      var res = { locals : {} };
      controller_boilerplate.say_hello({}, res, function () {
        res.locals.should.have.property('hello').and.equal('goodbye');
      });
    });

  });

});
