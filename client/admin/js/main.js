window.App = {
    Models: {},
    Views: {},
    Collections: {}
};
// templates = {};

Backbone.Model.prototype.idAttribute = "_id";

App.Views.Location = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', function () {
            this.render();
        }, this);
        this.model.on('destroy', function () {
            this.remove();
        }, this);
    },
    events: {
        'click .delete': 'deleteLocation'
    },
    tagName: 'tr',
    template: _.template(templates.locationTpl),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },
    deleteLocation: function () {
        this.model.destroy({wait: true});
    }
});

App.Views.Locations = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.appendNewLocation, this);
    },
    events: {
        'click #add-new': 'addNewLocation'
    },
    tagName: 'table',
    className: 'table table-striped',
    template: _.template(templates.locationsCollectionTpl),
    render: function () {
        this.$el.html(this.template({locations: this.collection}));
        this.$el.append('<button id="add-new" class="btn btn-info" data-toggle="modal"  \
            data-target="#edit-person-modal">Add group</button>');

        return this;
    },
    appendNewLocation: function (location) {
        var locationView = new App.Views.Location({model: location});
        this.$el.append(locationView.render().el);
    },
    addNewLocation: function () {
        var addLocationView = new App.Views.AddLocation({collection: this.collection});

        $('body').append(addLocationView.render().el);
        $('#locationAdd').modal('show');
    }
});

App.Views.Group = Backbone.View.extend({
    events: {
        'click .delete': 'deleteGroup'
        // 'click .delete': 'log'
    },
    log: function () {
        console.log('del');
    },
    initialize: function () {
        this.model.on('change', function () {
            this.render();
        }, this);
        this.model.on('destroy', function () {
            this.remove();
        }, this);
    },
    tagName: 'tr',
    template: _.template(templates.groupTpl),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },
    deleteGroup: function () {
        this.model.destroy({wait: true});
    }
});

App.Views.Groups = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.appendNewGroup, this);
    },
    events: {
        'click #add-new': 'addNewGroup'
    },
    tagName: 'table',
    className: 'table table-striped',
    template: _.template(templates.groupsCollectionTpl),
    render: function () {
        this.$el.html(this.template({locations: this.collection}));
        this.$el.append('<button id="add-new" class="btn btn-info" data-toggle="modal"  \
            data-target="#edit-person-modal">Add group</button>');
        return this;
    },
    appendNewGroup: function (group) {
        var groupView = new App.Views.Group({model: group});
        this.$el.append(groupView.render().el);
    },
    addNewGroup: function () {
        var addGroupView = new App.Views.AddGroup({collection: this.collection});

        $('body').append(addGroupView.render().el);
        $('#groupAdd').modal('show');
    }
});

App.Views.AddGroup = Backbone.View.extend({
    template: _.template(templates.groupModalAddTpl),
    render: function () {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click .add-new-group': 'createNewGroup'
    },
    createNewGroup: function () {
        var arr = this.$el.find('input').serializeArray(),
            data = _(arr).reduce(function(acc, field) {
              acc[field.name] = field.value;
              return acc;
            }, {});
        this.model = new App.Models.Group(data);
        if (!this.model.isNew()) {
            this.model.save(null, {dataType: 'text'});
        } else {
            this.collection.create(this.model.toJSON());
        }
    }
});

App.Views.AddLocation = Backbone.View.extend({
    template: _.template(templates.locationModalAddTpl),
    render: function () {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click .add-new-group': 'createNewLocation'
    },
    createNewLocation: function () {
        var arr = this.$el.find('input').serializeArray(),
            data = _(arr).reduce(function(acc, field) {
              acc[field.name] = field.value;
              return acc;
            }, {});
        this.model = new App.Models.Group(data);
        if (!this.model.isNew()) {
            this.model.save(null, {dataType: 'text'});
        } else {
            this.collection.create(this.model.toJSON());
        }
    }
});

App.Models.Location = Backbone.Model.extend({
    defaults: function () {
        return {
            city: '',
            country: ''
        };
    }
});

App.Collections.Locations = Backbone.Collection.extend({
    model: App.Models.Location,
    url: '/dbLocations'
});

App.Models.Group= Backbone.Model.extend({
    urlRoot: '/group',
    defaults: function () {
        return {
            name: '',
            direction: '',
            location: '',
            startDate: '',
            finishDate: '',
            status: ''
            // teachers: [],
            // experts: [],
            // students: []
        };
    },

    parse: function(data) {
        data.startDate = new Date(data.startDate).toISOString().slice(0, 10);
        data.finishDate = new Date(data.finishDate).toISOString().slice(0, 10);
        return data;
    }
});

App.Collections.Groups = Backbone.Collection.extend({
    model: App.Models.Group,
    url: '/groups'
});

$(function () {
    var locationsCollection = new App.Collections.Locations(),
        groupsCollection = new App.Collections.Groups();

    locationsCollection.fetch();
    groupsCollection.fetch();

    var locationsView = new App.Views.Locations({collection: locationsCollection}),
        groupsView = new App.Views.Groups({collection: groupsCollection});

    $('#locations').html(locationsView.render().el);
    $('#groups').html(groupsView.render().el);

    $('button.home').on('click', function () {
        window.location.href = '/';
    })
});