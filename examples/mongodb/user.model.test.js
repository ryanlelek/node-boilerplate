
'use strict';

// Modules
require('should');
var sinon = require('sinon');

// Subject
var model_user = require('../../../app/models/user.model.js');

describe('Model - User', function () {

  describe('.findByUsername()', function () {

    it('should take a "username" parameter', function () {

      // Check #1
      sinon.stub(model_user, 'find', function (properties) {
        properties.should.have.property('username').and.equal('some-user');
        model_user.find.restore();
      });
      model_user.findByUsername('some-user');

      // Check #2
      sinon.stub(model_user, 'find', function (properties) {
        properties.should.have.property('username').and.equal('another-user');
        model_user.find.restore();
      });
      model_user.findByUsername('another-user');

    });

  });

});
