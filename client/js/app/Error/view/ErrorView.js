'use strict';
(function (This) {
    This.ErrorView = Backbone.View.extend({
        tagName: 'div',
        className: '',
        tpl: templates.errorTpl,

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.tpl());
            return this;
        }
    });
})(App.Error);