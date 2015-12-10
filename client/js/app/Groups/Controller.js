 'use strict';
(function (This) {
    This.Controller = function() {
        var collection = collections.groups,
            collectionView,
            $el = $('#container');

        this.start = function () {
            setupMediator();
        };

        function setupMediator () {
            var key,
                subscribers;

            subscribers = {
                'currentGroupsView': renderCurrentGroups,
                'futureGroupsView': renderFutureGroups,
                'finishedGroupsView': renderFinishedGroups,
                'showAll': showAllCurrentGroups,
                'showInLocation': showInLocation,
                'showMy': showMy
            };

            for (key in subscribers) {
                cs.mediator.subscribe(key, subscribers[key], {}, this);
            }
        };

        function showAllCurrentGroups () {
            collection.fetch({success: renderCurrentGroups});
        };

        /*function showInLocation (location) {
            collection.fetch({success: renderCurrentGroups({
                data: {location: location}
            })});
        };*/

        /*function showAllCurrentGroups () {
            collection.fetch()
                .done(renderCurrentGroups.bind(this));
        };*/

        function showInLocation (location) {
            collection.fetch({data: {location: location}})
                .done(renderCurrentGroups.bind(this));
        };

        function renderCurrentGroups () {
            collectionView = new This.GroupCollectionView();
            $el.empty().append(collectionView.renderCurrentGroups().el);
        };

        function renderFutureGroups () {
            collectionView = new This.GroupCollectionView();
            $el.empty().append(collectionView.renderFutureGroups().el);
        };

        function renderFinishedGroups () {
            collectionView = new This.GroupCollectionView();
            $el.empty().append(collectionView.renderFinishedGroups().el);
        };

        function showMy () {
            var teacherName = cs.currentUser.getName();
            collections.groups = collections.groups.filter(function (group) {
                return group.get('teachers').indexOf(teacherName) != -1;
            });
            renderCurrentGroups();
        };

        return this;
    };
})(App.Groups);