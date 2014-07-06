
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

describe('POST /', function () {

  it('should respond with 200', function (done) {

    request.post('/')
      .set('Accept', 'application/json')
      .send({ data : 'test' })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ data : 'test', processed : true })
      .end(done);

  });

});
