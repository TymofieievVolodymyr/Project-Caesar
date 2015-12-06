'use strict';
(function (This) {
    This.GroupCollectionView = Backbone.View.extend({
        tagName: 'div',
        className: 'center-content',
        tpl: templates.groupCollectionTpl,

        events: {
            'click .add-new-group': 'addGroup',
            'click #up-navig': 'renderUp',
            'click #down-navig': 'renderDown'
        },

        initialize: function () {
            this.currentView = 'renderCurrent';
            this.collection = collections.groups;
            this.listenTo(this.collection, 'add', this.renderOne);
            
            $('body').append(templates.groupModalDeleteTpl);
        },

        renderUp: function () {
            if (this.currentView === 'renderCurrent') {
                cs.mediator.publish('futureGroups');
                this.renderFutureGroups();
            } else if (this.currentView === 'renderFinished') {
                cs.mediator.publish('currentGroups');
                this.renderCurrentGroups();
            }
        },

        renderDown: function () {
            if (this.currentView === 'renderCurrent') {
                cs.mediator.publish('finishedGroups');
                this.renderFinishedGroups();
            } else if (this.currentView === 'renderFuture') {
                cs.mediator.publish('currentGroups');
                this.renderCurrentGroups();
            }
        },

        render: function () {
            this.$el.html(this.tpl());
            this.renderAll(this.collection);
            return this;
        },

        renderCurrentGroups: function () {
            var filtered = this.collection.filter(function(model) {
                return (model.get('startDate') < this.getCurrentDate() &&
                model.get('finishDate') > this.getCurrentDate());
            }, this);

            this.currentView = 'renderCurrent';

            this.$el.html(this.tpl());
            this.renderAll(filtered);
            return this;
        },

        renderFinishedGroups: function () {
            var filtered = this.collection.filter(function(model) {
                var date = new Date();
                return model.get('finishDate') < this.getCurrentDate();
            }, this);

            this.currentView = 'renderFinished';

            this.$el.html(this.tpl());
            this.renderAll(filtered);
            return this;
        },

        renderFutureGroups: function () {
            var filtered = this.collection.filter(function(model) {
                return model.get('startDate') > this.getCurrentDate();
            }, this);

            this.currentView = 'renderFuture';

            this.$el.html(this.tpl());
            this.renderAll(filtered);
            return this;
        },

        renderAll: function (filtered) {
            filtered.forEach(this.renderOne, this);
        },

        renderOne: function (model) {
            var groupView = new This.GroupView({model: model});
            this.$('#main').append(groupView.render().el);
        },

        addGroup: function () {
            $('body').append(templates.groupModalAddTpl);
            var $groupAddModal = $('#groupAdd');

            $groupAddModal.on('hidden.bs.modal', function () {
                $groupAddModal.remove();
            });
            $groupAddModal.modal('show');
            $('.add-new-group').on('click', submitNewGroup);

            startDataPickers();
            addAdditionalTeacher();
            addAdditionalExpert();

            function startDataPickers () {
                $('#startDate').datetimepicker({
                    format: 'L'
                });
                $('#finishDate').datetimepicker({
                    format: 'L'
                });
            };
            function addAdditionalTeacher () {
                var teacherSelect = $('#groupAdd .teachers-block input');
                $('.add-teacher').on('click', function () {
                    teacherSelect.clone().appendTo('.teachers-block .input-group');
                });
            };
            function addAdditionalExpert () {
                var expertSelect = $('#groupAdd .experts-block input');
                $('.add-expert').on('click', function () {
                    expertSelect.clone().appendTo('.experts-block .input-group');
                });
            };
            function submitNewGroup () {
                var group = new App.Groups.Group();

                group.set({
                    id: _.uniqueId('newGroup_'),
                    name: $('#groupAdd input[name="GroupName"]').val(),
                    location: $('#groupAdd select[name="LocationName"] option:selected').val(),
                    startDate: $('#groupAdd #startDate').val(),
                    finishDate: $('#groupAdd #finishDate').val(),
                    status: $('#groupAdd select[name="StatusName"] option:selected').val(),
                    teachers: collectTeachers(),
                    experts: collectExperts(),
                });
                console.log(group.get('id'));

                group.save({
                    wait:true,
                    success:function(model, response) {
                        console.log('Successfully saved!');
                    },
                    error: function(model, error) {
                        console.log(model.toJSON());
                        console.log('error.responseText');
                    }
                });

                $groupAddModal.modal('hide');

                function collectTeachers () {
                    var teachers = $('#groupAdd input[name="teacher"]');
                    var teachersValue = [];
                    teachers.each(function () {
                        teachersValue.push($(this).val());
                    });
                    return teachersValue;
                };
                function collectExperts () {
                    var experts = $('#groupAdd input[name="experts"]');
                    var expertsValue = [];
                    experts.each(function () {
                        expertsValue.push($(this).val());
                    });
                    return expertsValue;
                };
            };
        },

        getCurrentDate: function () {
            var currentDate = new Date();
            return currentDate.toISOString();
        }
    });
})(App.Groups);