templates.gridTpl = _.template([
    '<div class="schedule-header">',
        '<div class="top-nav location-nav" id="up-navig">',
            '<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>',
        '</div>',
        '<h1>Schedule</h1>',
        '<button type="button" class="btn btn-primary schedule-margin" id="prevButton">Prev</button>',
        '<button type="button" class="btn btn-primary schedule-margin" id="nextButton">Next</button>',
    '</div>',
    '<% var hours = {\'1\': \'08-00\',\'2\': \'08-30\',\'3\': \'09-00\',\'4\': \'09-30\',\'5\': \'10-00\',\'6\': \'10-30\',\'7\': \'11-00\',\'8\': \'11-30\',\'9\': \'12-00\',\'10\': \'12-30\',\'11\': \'13-00\',\'12\': \'13-30\',\'13\': \'14-00\',\'14\': \'14-30\',\'15\': \'15-00\',\'16\': \'15-30\',\'17\': \'16-00\',\'18\': \'16-30\',\'19\': \'17-00\',\'20\': \'17-30\',\'21\': \'18-00\',\'22\': \'18-30\',\'23\': \'19-00\',\'24\': \'19-30\'}; %>',
    '<div id="grid" class="schedule-content">',
        '<table class="table table-bordered">',
            '<th></th>',
            '<% for (var j = 0; j < width - 1; j++) { %>',
                '<th>',
                    '<%= start.format(\'ddd, MMM D\') %>',
                '</th>',
                '<% start.add(1, \'d\'); %>',
            '<% } %>',
            '<% start.subtract(7, \'d\'); %>',
            '<% for (var i = 1; i < height; i++) { %>',
                '<tr>',
                    '<% for (var j = 0; j < width; j++) { %>',
                        '<td class=\'',
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