
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

describe('DELETE /', function () {

  it('should respond with 200', function (done) {
    request.del('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ deleted : true })
      .end(done);
  });

});

// Waiting for help from author on issue
// https://github.com/expressjs/method-override/issues/7
xdescribe('Method Override', function () {

  // POST / (same as above) with override
  it('should respond with 200 and { deleted : true }', function (done) {
    request.post('/?_method=DELETE')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ deleted : true })
      .end(done);
  });

});

describe('404 Not Found', function () {

  it('should respond with 404 and the path/method', function (done) {
    request.get('/does-not-exist')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect({ path : '/does-not-exist', method : 'GET' })
      .end(done);
  });

  // Should not return query strings
  it('should respond with 404 and the path/method', function (done) {
    request.post('/lost-in-space?query=string&stuff=things')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect({ path : '/lost-in-space', method : 'POST' })
      .end(done);
  });

});

describe('GET /error-next', function () {

  it('should respond with 500 and Next Error', function (done) {
    request.get('/error-next')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect({ error : { name : 'Error', message : 'Next Error' } })
      .end(done);
  });

});

describe('GET /error-throw', function () {

  it('should respond with 500 and Throw Error', function (done) {
    request.get('/error-throw')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect({ error : { name : 'Error', message : 'Throw Error' } })
      .end(done);
  });

});
