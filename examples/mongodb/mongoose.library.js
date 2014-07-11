
'use strict';

// Modules
var mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/boilerplate');
mongoose.set('debug', false);

// Export
module.exports = mongoose;
