
'use strict';

// Modules
require('should');
var sinon = require('sinon');

// Subject
var database = require('./module.database.js');

describe('Module - Database', function () {

  describe('.connection', function () {

    it('should be an object', function () {
      database.should.have.property('connection').and.be.type('object');
    });

    describe('.find()', function () {

      it('should be a method', function () {
        database.connection.should.have.property('find').and.be.type('function');
      });

      it('should return an empty array by default', function () {
        database.connection.find({}, function (error, results) {
          results.should.be.instanceOf(Array).with.length(0);
        });
      });

    });

  });

  describe('.query()', function () {

    it('should return query results', function (done) {

      // Here, we mock the database results to keep this module isolated
      sinon.stub(database.connection, 'find', function (parameters, callback) {
        database.connection.find.restore();
        callback(null, [
          { name : 'Bob' },
          { name : 'Alice' }
        ]);
      });

      // Query for (mocked) results
      database.query({}, function (error, results) {
        results.should.eql([
          { name : 'Bob' },
          { name : 'Alice' }
        ]);
        done();
      });

    });

  });

});
