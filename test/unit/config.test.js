
'use strict';

// Modules
require('should');

// http://stackoverflow.com/questions/2648293/javascript-get-function-name
function function_name (fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

// Subject
var config = require('../../app/config.js');

var default_app = {
  set : function () {},
  use : function () {}
};

describe('Config', function () {

  describe('.global()', function () {

    describe('environment', function () {

      it('should default to PRODUCTION', function () {
        var environment = config.global(default_app);
        environment.should.equal('PRODUCTION');
      });

      it('should be itentical when an environment is given', function () {
        var environment = config.global(default_app, 'SOME-ENVIRONMENT');
        environment.should.equal('SOME-ENVIRONMENT');
      });

    });

    describe('logger', function () {

      it('should not run a logger in DEFAULT environment', function () {

        var called = false;
        config.global({
          set : function () {},
          use : function (middleware) {
            if (function_name(middleware) === 'logger') {
              called = true;
            }
          }
        }, 'DEFAULT');

        called.should.equal(false);

      });

      it('should run a logger in DEVELOPMENT environment', function () {

        var called = false;
        config.global({
          set : function () {},
          use : function (middleware) {
            if (function_name(middleware) === 'logger') {
              called = true;
            }
          }
        }, 'DEVELOPMENT');

        called.should.equal(true);

      });

    });

  });

});
