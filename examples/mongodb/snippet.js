
'use strict';

// Pull in Mongoose model
var model_user = require('./user.model.js');

// Create - Main
model_user.create({
  username : 'test',
  password : 'hash'
}, function (error, document) {
  console.log('Create - Main', error, document);
});

// Create - Alternative
var test2 = new model_user({
  username : 'test2',
  password : 'hash'
});
test2.save(function (error, document) {
  console.log('Create - Alternative', error, document);
});

// Read - Query
model_user.find({ username : 'test' }, { _id : 1, username : 1 }, function (error, documents) {
  console.log('Read - Query', error, documents);
});

// Read - ID
model_user.findById('53bb205b61839e69c838d4c2', { _id : 1, username : 1 }, function (error, document) {
  console.log('Read - ID', error, document);
});

// Update (Coming Soon)
// Delete (Coming Soon)
