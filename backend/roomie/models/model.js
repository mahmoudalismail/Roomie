var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var appartmentSchema = new Schema ({
	location: [Number],
	roommate: Number,
	price: Number,
	metadata: [String],
	interests: [String]
});

module.exports = mongoose.model('Model', modelSchema);