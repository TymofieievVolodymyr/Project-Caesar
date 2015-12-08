var express = require('express'),
    routes = require('./routes/index'),
    group = require('./routes/group'),
    groups = require('./routes/groups'),
    location = require('./routes/location'),
    login = require('./routes/login'),
    logout = require('./routes/logout'),
    continueSession = require('./routes/continueSession'),
    app = express();
    
app.use('/', routes);
app.use('/group', group);
app.use('/groups', groups);
app.use('/dbLocations', location);
app.use('/login', login);
app.use('/logout', logout);
app.use('/continueSession', continueSession);

module.exports = app;