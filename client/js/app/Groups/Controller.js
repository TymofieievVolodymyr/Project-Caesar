 'use strict';
(function (This) {
    This.Controller = Backbone.Controller.extend({

        start: function () {
            this.collectionView = new This.GroupCollectionView();

            this.setupMediator();
            this.collectionViewEl = $('.col-md-8');
        },

        setupMediator: function () {
            var key,
                subscribers;

            subscribers = {
               'currentGroupsView': this.renderCurrentGroups,
               'futureGroupsView': this.renderCurrentGroups,
               'finishedGroupsView': this.renderCurrentGroups,
               'showAll': this.showAllCurrentGroups,
               'showInLocation': this.showInLocation,
               'showMy': this.showMy
            };

            for (key in subscribers) {
                cs.mediator.subscribe(key, subscribers[key], {}, this);
            }
        },

        showAllCurrentGroups: function () {
            this.collection.fetch()
                .done(this.renderCurrentGroups.call(this, {namespace: 'currentGroupsView'}));
        },

        showInLocation: function (location) {
            this.collection.fetch({data: {location: location}})
                .done(this.renderCurrentGroups.call(this, {namespace: 'currentGroupsView'}));
        },

        renderCurrentGroups: function (event) {
            var behavior = {
                    'currentGroupsView': this.collectionView.renderCurrentGroups,
                    'futureGroupsView': this.collectionView.renderFutureGroups,
                    'finishedGroupsView': this.collectionView.renderFinishedGroups
                },  
                method = event.namespace;

            this.collectionViewEl.empty().append(behavior[method].call(this.collectionView).el);
        },

        showMy: function () {
            var teacherName = cs.currentUser.getName();

            collections.groups = collections.groups.filter(function (group) {
                return group.get('teachers').indexOf(teacherName) != -1;
            });

            this.renderCurrentGroups({namespace: 'currentGroupsView'});
        }
    });
})(App.Groups);
