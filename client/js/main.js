'use strict';
var App = {
	    Groups: {},
	    Locations: {}
    },
    collections = {},
	cs = {},
    templates = {};

$(function () {
	collections.groups = new App.Groups.GroupCollection();
	collections.locations = new App.Locations.LocationCollection();
    
   _.each(collections, function (collection) {
        collection.fetch();
	});
	
	cs.mediator = new Mediator();
    cs.subRouters = {};
    cs.router = new App.Router();
	
	Backbone.history.start({pushState: true});
});
