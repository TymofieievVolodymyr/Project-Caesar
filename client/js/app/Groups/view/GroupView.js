'use strict';
(function (This) {
    This.GroupView = Backbone.View.extend({
        tagName: 'div',
        className: 'col-md-4',
        tpl: templates.groupTpl,

        events: {
            'click .edit-group-ico': 'editGroup',
            'click .delete-group-ico': 'deleteGroup',
            'contextmenu' : 'showMenu'
        },
        
        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this.model, 'destroy', this.remove);

            cs.mediator.subscribe('editGroup', this.editForContextMenu, {}, this);
            cs.mediator.subscribe('deleteGroup', this.deleteForContextMenu, {}, this);

            Backbone.Validation.bind(this);
        },

        render: function () {
            var userRole = cs.currentUser.getRole(),
                contextMenu;

            this.$el.html(this.tpl($.extend(
                this.model.toJSON(),
                {userRole: userRole}
            )));

            this.contextMenu = new App.ContextMenu.Controller();
            this.contextMenu.start(this.$el, this.model);
            this.contextMenu.addMenu();

            return this;
        },
        
        showStudents: function () {
            
        },

        editGroup: function () {
            var groupEditView = new This.GroupAddEditView({
                    model: this.model, 
                    tpl: templates.groupEditTpl
                }),
                $modalWrap = $('.modal-wrap');

            $modalWrap.html(groupEditView.render().el);
            $modalWrap.find('.modal').modal('show');
        },

        deleteGroup: function () {
            var groupDeleteView = new This.GroupDeleteView({model: this.model}),
                $modalWrap = $('.modal-wrap');

            $modalWrap.html(groupDeleteView.render().el);
            $modalWrap.find('.modal').modal('show');
        },

        showMenu: function (event) {
            event.preventDefault();

            var offset = this.$('.content-item').offset(),
                relativeX = (event.pageX - offset.left),
                relativeY = (event.pageY - offset.top);

            $('.context-menu').fadeOut(400);
            this.$('.context-menu').fadeIn(400)
                .css({
                    position: "absolute",
                    left: relativeX,
                    top: relativeY
                });
        },

        editForContextMenu: function (model) {
            if (model.cid === this.model.cid) {
                this.editGroup();
            }
        },

        deleteForContextMenu: function (model) {
            if (model.cid === this.model.cid) {
                this.deleteGroup();
            }
        }
    });
})(App.Groups);