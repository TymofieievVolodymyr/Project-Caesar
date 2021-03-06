templates.monthTpl = _.template([
     '<div class="row">',
        '<div class="col-md-1 main-nav">',
            '<span class="glyphicon glyphicon-chevron-left prevPeriod" aria-hidden="true" ></span>',
        '</div>',
        '<div class="col-md-10">',
            '<h1>Schedule: <%= groupName %>',
                '<span class = "period-title">',
                    ' (<%= start.format(\'MM/DD/YYYY\') %>',
                    '<% start.add(duration - 1, \'d\'); %>',
                    ' - <%= start.format(\'MM/DD/YYYY\') %>)',
                    '<% start.subtract(duration - 1, \'d\'); %>',
                '</span>',    
                '<button type="button" class="btn btn-primary week-month-switch">Week schedule</button>',
            '</h1>',
        '</div>',
        '<div class="col-md-1 main-nav">',
            '<span class="glyphicon glyphicon-chevron-right nextPeriod" aria-hidden="true"></span>',
        '</div>',
    '</div>',    
    '<table class="table table-bordered table-striped">',
        '<thead>',
            '<% var morning = startTime.hour(), evening = endTime.hour() %>',
            '<tr>',
                '<th></th>',
                 '<% for (var i = 0; i < (evening - morning)*2; i++) { %>',
                    '<th>',
                        '<%= startTime.format(\'HH:mm\') %> <%= startTime.add(30, \'m\').format(\'HH:mm\') %>',
                    '</th>',
                '<% } %>',
            '</tr>',
        '</thead>',
        '<tbody>',
            '<% startTime.hour(morning); %>',
            '<% for (var i = 0; i < duration; i++) { %>',
                '<tr>',
                    '<td>',
                        '<%= start.format(\'MM/DD/YYYY\') %>',
                    '</td>',
                    '<% for (var j = 0; j < (evening - morning)*2; j++) { %>',
                        '<td class="<%= startTime.format(\'HH-mm\')%>-<%= start.format(\'MM-DD-YYYY\') %>">',
                        '</td>',
                        '<% startTime.add(30, \'m\') %>',
                    '<% } %>',
                    '<% start.add(1, \'d\') %>',                   
                    '<% startTime.hour(morning) %>',
                '</tr>',
            '<% } %>',
            '<% start.subtract(duration, \'d\') %>',
        '</tbody>',
    '</table>'
].join(''));