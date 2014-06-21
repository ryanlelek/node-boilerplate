
'use strict';

// Modules
var supertest = require('supertest');

// Subject
var app = require('../../app/module.app.js');

// Bind SuperTest
var request = supertest(app);

describe('GET /', function () {

  it('should respond with 200', function (done) {

    request.get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ hello : 'goodbye' })
      .end(done);

  });

});
