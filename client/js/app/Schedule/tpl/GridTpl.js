templates.gridTpl = _.template([
    '<div class="schedule-header">',
        '<div class="top-nav location-nav" id="up-navig">',
            '<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>',
        '</div>',
        '<table class="schedule-table">',
          '<tr>',
            '<td>',
            '<button type="button" class="btn btn-default prevButton">',
              '<span class="glyphicon glyphicon-chevron-left "></span> Prev',
            '</button>',
            '</td><td>',
            '<h1>Schedule',
            '</h1>',
            '</td><td>',
            '<div class="dropdown">',
              '<button class="btn btn-default dropdown-toggle" type="button" id="groupDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">',
                'All groups ',
                '<span class="caret"></span>',
              '</button>',
              '<ul class="dropdown-menu" aria-labelledby="groupDropdown">',
                '<li class="hvr-fade">All groups</li>',
                '<li role="separator" class="divider"></li>',
                '<% collections.groups.forEach ( function (item) { %>',
                '<li class="hvr-fade"><%= item.get(\'name\') %></li>',
                '<% } ); %>',
              '</ul>',
            '</div>',
            '</td><td>',
            '<button type="button" class="btn btn-default nextButton">',
              'Next <span class="glyphicon glyphicon-chevron-right "></span>',
            '</button>',
            '</td>',
           '</tr>',
          '</table>',
    '</div>',    
        
    '</div>',
    '<% var hours = {\'1\': \'08-00\',\'2\': \'08-30\',\'3\': \'09-00\',\'4\': \'09-30\',\'5\': \'10-00\',\'6\': \'10-30\',\'7\': \'11-00\',\'8\': \'11-30\',\'9\': \'12-00\',\'10\': \'12-30\',\'11\': \'13-00\',\'12\': \'13-30\',\'13\': \'14-00\',\'14\': \'14-30\',\'15\': \'15-00\',\'16\': \'15-30\',\'17\': \'16-00\',\'18\': \'16-30\',\'19\': \'17-00\',\'20\': \'17-30\',\'21\': \'18-00\',\'22\': \'18-30\',\'23\': \'19-00\',\'24\': \'19-30\'}; %>',
    '<div id="grid" class="schedule-content">',
        '<table class="schedule-table">',
            '<th class="schedule-bordered"></th>',
            '<% for (var j = 0; j < width - 1; j++) { %>',
                '<th class="schedule-bordered">',
                    '<%= start.format(\'ddd, MMM D\') %>',
                '</th>',
                '<% start.add(1, \'d\'); %>',
            '<% } %>',
            '<% start.subtract(7, \'d\'); %>',
            '<% for (var i = 1; i < height; i++) { %>',
                '<tr>',
                    '<% for (var j = 0; j < width; j++) { %>',
                        '<td class=\'schedule-bordered ',
                            '<%= hours[i] %>',
                            '<% if (j !== 0) { %>',
                                '<%= start.format(\'-MM-DD-YYYY\') %>',
                                '<% start.add(1, \'d\'); %>',
                            '<% } %>',
                        '\'>',
                            '<% if (j === 0) { %>',
                                '<%= hours[i] %>',
                            '<% } %>',
                        '</td>',  
                    '<% } %>',
                    '<% start.subtract(7, \'d\'); %>',
                '</tr>',
            '<% } %>',
        '</table>',
    '</div>',
    '<div class="schedule-footer">',
        '<div class="top-nav location-nav" id="down-navig">',
            '<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>',
        '</div>',
    '</div>'
].join(''));