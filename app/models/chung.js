// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Chung = new Schema(
{
	  location: String,
    upvotes: Number,
    downvotes: Number
});

module.exports = mongoose.model('locations', Chung);
