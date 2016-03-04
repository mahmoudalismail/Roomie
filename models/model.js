var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var apartmentSchema = new Schema ({
	category: String, // studio, apartment...
	location: [Number],
	address: String,
	roommate: Number,
	price: Number,
	phonenum: Number,
	numbeds: Number,
	metadata: [String], //Example: ["bed:2", "bath:1",...]
	interests: [String],
	numImgs: Number
});

module.exports = mongoose.model('Appartment', apartmentSchema);
