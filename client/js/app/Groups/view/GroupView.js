'use strict';
(function (This) {
    This.GroupView = Backbone.View.extend({
        tagName: 'tr',
		className: 'shortInfo',
        tpl: templates.groupTpl,
		
		events: {
			'click': 'showStudents'
		},
		
        initialize: function () {
            this.model.on('change', function () {
                this.render();
            }, this);
        },

        render: function () {
            this.$el.html(this.tpl(this.model.toJSON()));

            return this;
        },
		
		showStudents: function () {
			alert(this.model.get('students').join());
		}
    });
})(App.Groups);