templates.groupAddTpl = _.template([
    '<div class="modal fade" tabindex="-1" role="dialog">',
        '<div class="modal-dialog">',
            '<div class="modal-content">',
                '<div class="modal-header">',
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                    '<h4 class="modal-title">Add New Group</h4>',
                '</div>',
                '<div class="modal-body">',
                    '<div class="form-horizontal">',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Name</label>',
                            '<div class="col-sm-10">',
                                '<input type="text" class="form-control" name="GroupName" placeholder="Group name" aria-describedby="basic-addon1">',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Location</label>',
                            '<div class="col-sm-10">',
                                '<select class="form-control" name="LocationName">',
                                    '<% locations.forEach(function(currentLocation) { %>',
                                        '<option>',
                                            '<%= currentLocation.get("city") %>',
                                        '</option>',
                                    '<% }, this); %>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Direction</label>',
                            '<div class="col-sm-10">',
                                '<select class="form-control" name="Direction">',
                                    '<% directions.forEach(function(currentDirection) { %>',
                                        '<option>',
                                            '<%= currentDirection.get("technologies") %>',
                                        '</option>',
                                    '<% }, this); %>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Start Date</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Start Date" id="startDate">',
                                '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>',
                            '</div>',
                            '<label class="col-sm-2 control-label">Start Date</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Finish Date" id="finishDate">',
                                '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<div class="teachers-block col-sm-6">',
                                '<label>Teachers</label>',
                                '<select class="form-control" multiple name="Teachers">',
                                    '<% allTeachers.forEach(function(currentTeacher) { %>',
                                        '<option><%= currentTeacher %></option>',
                                    '<% }, this); %>',
                                '</select>',
                            '</div>',
                            '<div class="experts-block col-sm-6">',
                                '<label>Experts</label>',
                                '<input type="text" class="form-control" placeholder="Experts" name="experts">',
                                '<a class="add-expert">+ Add Expert</a>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="modal-footer clearfix">',
                    '<button type="button" class="btn btn-default close-btn" data-dismiss="modal">Close</button>',
                    '<button type="button" class="btn btn-primary submit">Add</button>',
                '</div>',
            '</div>',
        '</div>',
    '</div>'
].join(''));