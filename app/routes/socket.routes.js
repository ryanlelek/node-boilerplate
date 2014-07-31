
'use strict';

// Exports
module.exports = function (app, io) {

  // Send a message to ALL connected sockets every 5 seconds
  setInterval(function () {
    io.sockets.emit('message', { content : Math.floor(Date.now() / 1000) });
  }, 5000);

  io.on('connection', function (socket) {

    console.log('Connected');

    socket.on('disconnect', function () {
      console.log('Disconnected');
    });

    socket.on('message', function (data) {
      console.log('Message:', data);
      if (data.content && data.content !== '') {
        io.sockets.emit('message', data);
      }
    });

  });

};
