$(document).ready(function () {
  // Handles on Element Selectors
  var messages = $("#messages");
  var input = $("#content");

  // ##### Connect #####
  // Short version
  var socket = io(location.protocol + "//" + location.host, {
    path: "/ws/",
  });
  //
  // Long Version
  // var manager = new io.Manager(location.protocol"//"+location.host, {
  //   reconnectionDelayMax: 10000,
  //   path: "/ws/"
  // });
  // var socket = manager.socket("/"); // Namespace

  // On Message/Data
  socket.on("message", function (data) {
    messages.append("<li>" + data.content + "</li>");
  });

  // Form Submission
  // New Message
  $("#message_form").submit(function (e) {
    // Stops form element from submitting as it
    // would normally work on submit button click
    e.preventDefault();

    // Send Content
    socket.emit("message", {
      content: input.val(),
    });

    // Clear Input
    input.val("");
  });
});
