
'use strict';

// Modules
var supertest = require('supertest');

// Subject
var app = require('../../app/index.js');

// Bind SuperTest
var request = supertest(app);

describe('GET /', function () {

  it('should respond with 200', function (done) {
    request.get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /text\/html; charset=UTF-8/)
      .expect(200)
      .end(done);
  });

});

describe('GET /home', function () {

  it('should respond with 200', function (done) {
    request.get('/home')
      .set('Accept', 'text/html')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ page : 'home' })
      .end(done);
  });

});
