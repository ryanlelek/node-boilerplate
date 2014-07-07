
'use strict';

// An Example Database Connection Object
var connection = {
  find : function (parameters, callback) {
    // Fetch stuff from database here...
    var results = [];
    callback(null, results);
  }
};

// Exports
module.exports = {
  connection : connection,
  query      : query
};

function query (parameters, callback) {
  connection.find(parameters, function (error, results) {
    callback(error, results);
  });
}
