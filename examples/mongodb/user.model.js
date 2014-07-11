
'use strict';

// Modules
var mongoose = require('../library/mongoose.library.js');

// Configure Schema
var schema = mongoose.Schema({
  username : String,
  password : String
});

// Custom Methods
schema.statics.findByUsername = function (username, done) {
  this.find({ username : username }, done);
};

// Exports
module.exports = mongoose.model('User', schema);
