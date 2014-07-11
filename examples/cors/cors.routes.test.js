
'use strict';

// Modules
require('should');
var supertest = require('supertest');

// Subject
var app = require('../../app/index.js');

// Bind SuperTest
var request = supertest(app);

describe('CORS Setup/Protection', function () {

  describe('GET /cors', function () {

    it('should allow origin allowed.example.com', function (done) {
      request.get('/cors')
        .set('Accept', 'application/json')
        .set('Origin', 'http://allowed.example.com')
        .set('Access-Control-Request-Method', 'GET')
        .set('Access-Control-Request-Headers', 'Accept, Content-Type')
        .expect(204)
        .end(function (error, res) {
          res.headers.should.have.property('access-control-allow-origin').and.equal('http://allowed.example.com');
          res.body.should.have.property('cors').and.equal('successful');
          done();
        });
    });

    it('should not allow origin denied.example.com', function (done) {
      request.get('/cors')
        .set('Accept', 'application/json')
        .set('Origin', 'http://denied.example.com')
        .set('Access-Control-Request-Method', 'GET')
        .set('Access-Control-Request-Headers', 'Accept, Content-Type')
        .expect(404)
        .end(done);
    });

  });

  describe('OPTIONS /cors', function () {

    it('should allow origin allowed.example.com', function (done) {
      request.options('/cors')
        .set('Accept', 'application/json')
        .set('Origin', 'http://allowed.example.com')
        .set('Access-Control-Request-Method', 'POST')
        .set('Access-Control-Request-Headers', 'Accept, Content-Type')
        .expect(204)
        .end(function (error, res) {
          res.headers.should.have.property('access-control-allow-origin').and.equal('http://allowed.example.com');
          res.headers.should.have.property('access-control-allow-methods').and.equal('GET,HEAD,PUT,PATCH,POST,DELETE');
          res.headers.should.have.property('access-control-allow-headers').and.equal('Accept, Content-Type');
          done();
        });
    });

    it('should not allow origin denied.example.com', function (done) {
      request.options('/cors')
        .set('Accept', 'application/json')
        .set('Origin', 'http://denied.example.com')
        .set('Access-Control-Request-Method', 'POST')
        .set('Access-Control-Request-Headers', 'Accept, Content-Type')
        .expect(404)
        .end(done);
    });

  });

});
