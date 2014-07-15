
'use strict';

// Modules
var http     = require('http');
var app      = require('./app/index.js');

// HTTP Server
var server = http.createServer(app).listen(app.get('port'), function () {
  console.log('---');
  console.log('HTTP Server Started');
  console.log('Mode:', app.get('env'));
  console.log('Port:', app.get('port'));
});

// WebSockets
var io = require('socket.io')(server, { serveClient: false });

// Send a message to ALL connected sockets every 5 seconds
setInterval(function () {
  io.sockets.emit('message', { time : Math.floor(Date.now() / 1000) });
}, 5000);

io.on('connection', function (socket) {

  console.log('Connected');

  socket.on('disconnect', function () {
    console.log('Disconnected');
  });

  socket.on('message', function (data) {
    console.log('Message:', data);
    io.sockets.emit('message', data);
  });

});
