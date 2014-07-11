
'use strict';

// Modules
require('should');
var supertest = require('supertest');

// Subject
var app = require('../../app/index.js');

// Bind SuperTest
var request = supertest(app);

describe('GET /', function () {

  it('should respond with 200', function (done) {
    request.get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ page : 'home' })
      .end(done);
  });

});