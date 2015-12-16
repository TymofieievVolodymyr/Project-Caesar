templates.editViewTpl = _.template([
        '<div class="col-md-4">',
            '<label class="edit-panel-labels">Event Type</label>',
            '<select class="form-control" name="eventType" id = "event-type">',
                '<% types.forEach(function(type) { %>',
                    '<option><%= type %></option>',
                '<% }, this); %>',
            '</select>',
        '</div>',
        '<div class="col-md-4">',
            '<label class="edit-panel-labels">Office</label>',
            '<div class="btn-group" data-toggle="buttons" name="OfficeName" id="offices">',
                '<% if (offices) { %>',
                    '<% offices.forEach(function(office) { %>',
                        '<label class="btn btn-primary">',
                            '<input type="radio" name="options"',
                                ' id="',
                                    '<%= "ofice_" + office.get("_id") %>',
                                '"',
                                ' autocomplete="off">',
                            '<span><%= office.get("name") %></span>',
                        '</label>',
                    '<% }, this); %>',
                '<% } %>',
            '</div>',
        '</div>',
        '<div class="col-md-4">',
            '<label class="edit-panel-labels">Room</label>',
            '<div class="btn-group" data-toggle="buttons" name="RoomName" id="rooms">',
                '<% if (rooms) { %>',
                    '<% rooms.forEach(function(room) { %>',
                        '<label class="btn btn-primary"  data-room-id="<%= room.get("_id") %>">',
                            '<input type="radio" name="options"',
                                ' id="',
                                    '<%= "room_" + room.get("_id") %>',
                                '"',
                                ' autocomplete="off">',
                            '<span><%= room.get("name") %></span>',
                        '</label>',
                    '<% }, this); %>',
                '<% } %>',
            '</div>',
        '</div>'
].join(''));