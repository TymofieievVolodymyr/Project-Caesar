templates.groupTpl = _.template([
    '<td><%= name %></td>',
    '<td><%= direction %></td>',
    '<td><%= location %></td>',
    '<td><%= startDate %></td>',
    '<td><%= finishDate %></td>',
    //'<td><%= teachers %></td>',
    '<td>',
        '<ul>',
        '<% _.each(teachers, function (teacher) { %>',
            '<li><%= teacher %></li>',
        '<% }) %>',
        '</ul>',
    '</td>',
    '<td>',
        '<button class="btn btn-info edit">Edit</button>',
        '<button class="btn btn-danger delete">Delete</button>',
    '</td>'
].join(''));
templates.groupsCollectionTpl = _.template([
    '<thead>',
        '<th>Name</th>',
        '<th>Direction</th>',
        '<th>Location</th>',
        '<th>Start Date</th>',
        '<th>Finish Date</th>',
        '<th>Teachers</th>',
        '<th class="actions">Action</th>',
    '</thead>',
    '<tbody>',
    '</tbody>'
].join(''));
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
                                    '<option>Chernivtsi</option>',
                                    '<option>Kyiv</option>',
                                    '<option>Dnipro</option>',
                                    '<option>Sofia</option>',
                                    '<option>Rivne</option>',
                                    '<option>Ivano-Frankivsk</option>',
                                    '<option>Lviv</option>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Direction</label>',
                            '<div class="col-sm-10">',
                                '<select class="form-control" name="Direction">',
                                    '<option>.Net</option>',
                                    '<option>WebUI</option>',
                                    '<option>Java</option>',
                                    '<option>QC</option>',
                                    '<option>C#</option>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Start</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Start Date" id="startDate">',
                            '</div>',
                            '<label class="col-sm-2 control-label">Finish</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Finish Date" id="finishDate">',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<div class="teachers-block col-sm-6">',
                                '<label>Teachers</label>',
                                '<input type="text" class="form-control" placeholder="Teacher" name="teacher">',
                                '<a class="add-teacher">+ Add Teacher</a>',
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
                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
                    '<button type="button" class="btn btn-primary submit">Submit</button>',
                '</div>',
            '</div>',
        '</div>',
    '</div>'
].join(''));
templates.groupEditTpl = _.template([
    '<div class="modal fade" tabindex="-1" role="dialog">',
        '<div class="modal-dialog">',
            '<div class="modal-content">',
                '<div class="modal-header">',
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                    '<h4 class="modal-title">Edit Group</h4>',
                '</div>',
                '<div class="modal-body">',
                    '<div class="form-horizontal">',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Group</label>',
                            '<div class="col-sm-10">',
                                '<input type="text" class="form-control" name="GroupName" placeholder="Group name" aria-describedby="basic-addon1" value="<%= name %>">',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Location</label>',
                            '<div class="col-sm-10">',
                                '<select class="form-control" name="LocationName">',
                                    '<option <% if (location === "Kyiv") { %> selected <% } %> >Kyiv</option>',
                                    '<option <% if (location === "Lviv") { %> selected <% } %> >Lviv</option>',
                                    '<option <% if (location === "Ivano-Frankivsk") { %> selected <% } %> >Ivano-Frankivsk</option>',
                                    '<option <% if (location === "Sofia") { %> selected <% } %> >Sofia</option>',
                                    '<option <% if (location === "Chernivtsi") { %> selected <% } %> >Chernivtsi</option>',
                                    '<option <% if (location === "Dnipro") { %> selected <% } %> >Dnipro</option>',
                                    '<option <% if (location === "Rivne") { %> selected <% } %> >Rivne</option>',
                                    '<option <% if (location === "Rovno") { %> selected <% } %> >Rovno</option>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Direction</label>',
                            '<div class="col-sm-10">',
                                '<select class="form-control" name="Direction">',
                                    '<option <% if (direction === ".Net") { %> selected <% } %> >.Net</option>',
                                    '<option <% if (direction === "WebUI") { %> selected <% } %> >WebUI</option>',
                                    '<option <% if (direction === "Java") { %> selected <% } %> >Java</option>',
                                    '<option <% if (direction === "QC") { %> selected <% } %> >QC</option>',
                                    '<option <% if (direction === "C#") { %> selected <% } %> >C#</option>',
                                '</select>',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<label class="col-sm-2 control-label">Start</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Start Date" id="startDate" value="<%= startDate %>">',
                            '</div>',
                            '<label class="col-sm-2 control-label">Finish</label>',
                            '<div class="col-sm-4">',
                                '<input type="text" class="form-control" placeholder="Finish Date" id="finishDate" value="<%= finishDate %>">',
                            '</div>',
                        '</div>',
                        '<div class="form-group">',
                            '<div class="teachers-block col-sm-6">',
                                '<label class="control-label">Teachers</label>',
                                '<% _.each(teachers, function (teacher) { %>',
                                    '<input type="text" class="form-control" placeholder="Teacher" name="teacher" value="<%= teacher %>">',
                                '<% }) %>',
                                '<a class="add-teacher">+ Add Teacher</a>',
                            '</div>',
                            '<div class="experts-block col-sm-6">',
                                '<label class="control-label">Experts</label>',
                                '<% _.each(experts, function (expert) { %>',
                                    '<input type="text" class="form-control" placeholder="Teacher" name="teacher" value="<%= expert %>">',
                                '<% }) %>',
                                '<a class="add-expert">+ Add Expert</a>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="modal-footer clearfix">',
                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
                    '<button type="button" class="btn btn-primary submit">Submit</button>',
                '</div>',
            '</div>',
        '</div>',
    '</div>'
].join(''));