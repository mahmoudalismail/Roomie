var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var appartmentSchema = new Schema ({
	location: [Number],
	roommate: Number,
	price: Number,
	phonenum: Number,
	metadata: [String],
	interests: [String]
});

module.exports = mongoose.model('Model', appartmentSchema);
