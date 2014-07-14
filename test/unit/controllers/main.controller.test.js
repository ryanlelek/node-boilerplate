
'use strict';

// Modules
require('should');

// Subject
var controller_main = require('../../../app/controllers/main.controller.js');

describe('Controller - Main', function () {

  describe('.home()', function () {

    it('should add a "page" property to res.locals', function () {
      var res = { locals : {} };
      controller_main.home({}, res, function () {
        res.locals.should.have.property('page').and.equal('home');
      });
    });

  });

});
