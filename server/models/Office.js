var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Office = mongoose.model('Office', new Schema({
    	_id: Number,
    	name: String,
    	location: { type: String, ref: 'Location' }
    }));

module.exports = Office;