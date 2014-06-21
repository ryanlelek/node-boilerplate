
'use strict';

// Modules
require('should');
var sinon = require('sinon');

// Subject
var database = require('../../app/module.database.js');

describe('Module - Database', function () {

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
