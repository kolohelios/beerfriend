'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true},
  favBeer: {type: String},
  age: {type: Number, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
