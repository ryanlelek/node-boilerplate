
'use strict';

// Modules
var mongoose = require('./mongoose.connect.js');

// Configure Schema
var schema = mongoose.Schema({
  username : String,
  password : String
});

// Build Model from Schema
var model = mongoose.model('User', schema);

// Exports
module.exports = model;
