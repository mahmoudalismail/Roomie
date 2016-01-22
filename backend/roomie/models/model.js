var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var appartmentSchema = new Schema ({
	category: String, // studio, apartment...
	location: [Number],
	address: String,
	roommate: Number,
	price: Number,
	phonenum: Number,
	metadata: [String], //Example: ["bed:2", "bath:1",...]
	interests: [String]
});

module.exports = mongoose.model('Appartment', appartmentSchema);
