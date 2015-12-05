'use strict';
var App = {
        Menu: {},
	    Groups: {},
        Cookies: {},
        Users: {},
        Session: {},
	    Locations: {}        
    },
    collections = {},
	cs = {},
    templates = {};

Backbone.Model.prototype.idAttribute = "_id";

$(function () {
	collections.groups = new App.Groups.GroupCollection();
	collections.locations = new App.Locations.LocationCollection();

   _.each(collections, function (collection) {
        collection.fetch();
	});
	
	cs.mediator = new Mediator();
    cs.subRouters = {};
    cs.router = new App.Router();
    cs.cookiesController = new App.Cookies.Controller();
    cs.sessionController = new App.Session.Controller();
    cs.menu = new App.Menu.Controller();
    
    Backbone.history.start({pushState: true});
    
    cs.mediator.publish('continueSessionRequired');
});
