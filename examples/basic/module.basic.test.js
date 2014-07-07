
'use strict';

// Modules
require('should');

// Subject
var basic = require('./module.basic.js');

describe('Module - Basic', function () {

  describe('.add()', function () {

    it('should return the sum when given two numbers', function () {
      basic.add(2, 5).should.equal(7);
      basic.add(10, 42).should.equal(52);
      basic.add(2, 0).should.not.equal(20);
    });

  });

  describe('.multiply()', function () {

    it('should return the product when given two numbers', function () {
      basic.multiply(2, 5).should.equal(10);
      basic.multiply(10, 42).should.equal(420);
      basic.multiply(2, 0).should.not.equal(2);
    });

  });

});
