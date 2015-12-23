var express = require('express'),
    group = require('./group'),
    groups = require('./groups'),
    location = require('./location'),
    events = require('./events'),
    _event = require('./event'),
    rooms = require('./rooms'),
    offices = require('./offices'),
    employees = require('./employees'),
    contributors = require('./contributors'),
    directions = require('./directions'),
    groupITA = require('./groupita'),
    router = express.Router();


router.use('/group', group);
router.use('/groups', groups);
router.use('/dbLocations', location);
router.use('/events', events);
router.use('/event', _event);
router.use('/rooms', rooms);
router.use('/offices', offices);
router.use('/employees', employees);
router.use('/contributors', contributors);
router.use('/directions', directions);
router.use('/groupITA', groupITA);

module.exports = router;