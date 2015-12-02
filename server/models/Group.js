var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

Group = mongoose.model('Group', new Schema({
	title: String,
	startDate: String,
	finishDate: String,
	location: String,
	direction: String,
	status: String
}));

function save(data, callback, error){
    var user = new User(data);
    user.save(function(err){
        callback(err, user);
    });
}

function find(conditions, callback){
    return User.find(conditions, function(err, docs){
        callback(err, docs);
    });
}

function update(conditions, updateObj, callback){
    User.update(conditions, updateObj, function(err, docs){
        callback(err, docs);
    });
}

function remove(conditions, callback){
    User.remove(conditions,function(err){
        callback(err);
    });
}

module.exports = {
    update: update,
    save: save,
    find: find,
    remove: remove
};