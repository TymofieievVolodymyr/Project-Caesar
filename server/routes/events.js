var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

require('../models/Event');

router.get('/', function(req, res, next) {
    var db = mongoose.connection,
        EventModel = mongoose.model('Event'),
        options = {};
        
    if (req.query['groupID']) {
        options['groupID'] = { $in: req.query['groupID']};
    };
    
    EventModel.find(options, function (err, events) {
        if (err) {
            console.log(err);
        }
        res.send(JSON.stringify(events));
    });
});

module.exports = router;