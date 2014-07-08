
'use strict';

module.exports = function (app) {

  app.get('/public-api-cors', [
    allow_cors('local.example.com'),
    function (req, res, next) {
      console.log(req.headers);
      res.send(200, { api : 'online' });
    }
  ]);

  app.options('/public-api-cors', [
    allow_cors('local.example.com'),
    function (req, res, next) {
      console.log(req.headers);
      res.send(200, { api : 'online' });
    }
  ]);

  app.post('/public-api-cors', [
    allow_cors('local.example.com'),
    function (req, res, next) {
      console.log(req.headers);
      res.send(200, { api : 'posted', data : req.body.data });
    }
  ]);

};

// TODO: Add option for HTTPS option
function allow_cors (domain) {

  return function (req, res, next) {

    // CORS Headers
    res.set('Access-Control-Allow-Origin', 'http://' + domain);
    res.set('Access-Control-Allow-Methods', ['OPTIONS', 'GET', 'POST']);
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    next();

  };

}
