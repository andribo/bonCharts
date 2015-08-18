var templates = {
  settingsTree: 
    // '<nav class="navbar navbar-inverse navbar-fixed-top">'
   '<ul class="nav nav-stacked" id="accordion">'
  +   '<% _.each(settingsTree, function(elem, index) { %>'
  +     '<% if (!elem.hidden) { %>'
  +       '<li class="nav-header panel dark">'
  +         '<a href="#<%=elem.name%>" id="<%=elem.name%>" class="settings-tree-item" data-toggle="collapse" data-parent="#accordion" data-target="#<%=elem.name%>-subitems"><%= elem.text || settings[elem.name][0] %></a>'
  +         '<% if(elem.name === "series") { %>'
  +           '<input type="button" id="addseries" class="add-series-btn btn btn-default btn-xs" value="+">'
  +         '<% } %>'
  +         '<% if(elem.items) { %>'
  +           '<ul class="nav nav-stacked collapse light" id="<%=elem.name%>-subitems">'
  +             '<% _.each(elem.items, function(item) { %>'
  +               '<% if (!item.hidden) { %>'
  +                 '<li>'
  +                   '<a href="#<%= item.name %>" id="<%= item.name %>" class="settings-tree-item subitem"><%= settings[item.name] ? settings[item.name][0] : item.name %></a>'
  +                   '<% if(elem.name === "series") { %>'
  +                     '<input type="button" id="deleteseries-<%= item.name %>" class="delete-series-btn btn btn-default btn-xs" value="-">'
  +                   '<% } %>'
  +                 '</li>'
  +               '<% } %>'
  +             '<% }); %>'
  +           '</ul>'
  +         '<% } %>'
  +       '</li>'
  +     '<% } %>'
  +   '<% }); %>'
  + '</ul>',
  // + '</nav>',
  //   '<ul>'
  // +   '<% _.each(settingsTree, function(elem) { %>'
  // +     '<% if (!elem.hidden) { %>'
  // +       '<li id="<%=elem.name%>" class="settings-tree-item">'
  // +					'<%= elem.text || settings[elem.name][0] %>'
  // +					'<% if(elem.name === "series") { %>'
  // +						'<input type="button" id="addseries" class="add-series-btn" value="+">'
  // +         '<% } %>'
  // +         '<% if(elem.items) { %>'
  // +           '<ul>'
  // +             '<% _.each(elem.items, function(item) { %>'
  // +               '<% if (!item.hidden) { %>'
  // +                 '<li id="<%= item.name %>" class="settings-tree-item">'
  // +										'<%= settings[item.name] ? settings[item.name][0] : item.name %>'
  // +										'<% if(elem.name === "series") { %>'
  // +											'<input type="button" id="deleteseries-<%= item.name %>" class="delete-series-btn" value="-">'
  // +         					'<% } %>'
  // +									'</li>'
  // +               '<% } %>'
  // +             '<% }); %>'
  // +           '</ul>'
  // +         '<% } %>'
  // +       '</li>'
  // +     '<% } %>'
  // +   '<% }); %>'
  // + '</ul>',
  settings: 
    '<div class="panel-heading"><h3 class="panel-title"><%= settings[0] %></h3></div>'
    // '<h3><%= settings[0] %></h3>'
  // + '<div class="panel-body">'    
  + '<ul class="form-horizontal list-group">'
  +   '<% _.each(settings, function(elem, index) {%>'
  +     '<% if (index === 0) { return; }%>'
  +     '<% if (!elem.hidden) { %>'
  +     '<li class="form-group list-group-item">'
  +       '<% if (elem.type === "number") { %>'
  +         '<label for="<%= elem.name %>" class="col-sm-6 control-label"><%= elem.title %></label>'
  +         '<div class="col-sm-6">'
  +           '<input class="form-control setting-property" type="number" id="<%= elem.name %>" min="<%= elem.min %>" max="<%= elem.max %>" step="<%= elem.step %>" value="<%= data[elem.name] %>">'
  +         '</div>'
  +       '<% } else if (elem.type === "checkbox") { %>'
  +         '<label for="<%= elem.name %>" class="col-sm-7 control-label"><%= elem.title %></label>'
  +         '<div class="col-sm-5">'
  +           '<input class="checkbox setting-property" type="checkbox" id="<%= elem.name %>" <% if (data[elem.name]) { %>checked<% } %>>'
  +         '</div>'
  +       '<% } else if (elem.type === "select") { %>'
  +         '<label for="<%= elem.name %>" class="col-sm-6 control-label"><%= elem.title %></label>'
  +         '<div class="col-sm-6">'
  +         '<select class="form-control setting-property" id="<%= elem.name %>">'
  +           '<% _.each(elem.options, function(option) {%>'
  +             '<option <% if (data[elem.name] === option) { %>selected<% } %> value="<%= option %>"><%= option %></option>'
  +           '<%}) %>'
  +         '</select>'
  +         '</div>'
  +       '<% } else if (elem.type === "datalist") { %>'
  +         '<label for="<%= elem.name %>" class="col-sm-6 control-label"><%= elem.title %></label>'
  +         '<div class="col-sm-6">'
  +         '<input class="form-control setting-property" list="<%= elem.name + \'_list\' %>" id="<%= elem.name %>" value="<%= data[elem.name] %>">'
  +         '<datalist id="<%= elem.name + \'_list\' %>">'
  +           '<% _.each(elem.options, function(option) {%>'
  +             '<option value="<%= option %>">'
  +           '<%}) %>'
  +         '</datalist>'
  +         '</div>'
  +       '<% } else { %>'
  +         '<label for="<%= elem.name %>" class="col-sm-6 control-label"><%= elem.title %></label>'
  +         '<div class="col-sm-6">'
  +         '<input class="form-control setting-property" type="<%= elem.type %>" id="<%= elem.name %>" value="<%= data[elem.name] %>">'
  +         '</div>'
  +       '<% } %>'
  +     '</li>'
  +     '<% } %>'
  +   '<% }) %>'
  + '</ul>',
  // + '</div>',
  data:
    '<div class="data-view-header panel-heading">'
  +   '<input class="btn btn-default" type="button" value="Add Column"> '
  +   '<input class="btn btn-default" type="button" value="Add Row"> '
  // +   '<label class="btn btn-default data-import">Import<input id="data-file" type="file" accept=".csv,.tsv,.xls,.xlsx" style="display: none;"></label>' // ,.xlsm,.xlsb,.ods,.xml
  +   '<input class="btn btn-default data-import" id="data-file" type="file" accept=".csv,.tsv,.xls,.xlsx">' // ,.xlsm,.xlsb,.ods,.xml
  // +   '<label class="data-import">Add columns headers<input type="checkbox"></label>'
  + '</div>'
  // + '<div class="data-view-content panel-body">'
  +   '<table id="data-table" class="table table-bordered table-striped table-hover">'
  +     '<thead>'
  +       '<tr>'
  +         '<th class="delete-row"></td>'
  +         '<% _.each(rows[0], function(item) {%>'
  +           '<th><%= item %></th>'
  +         '<% }) %>'
  +       '</tr>'
  +    '</thead>'
  +     '<% _.each(rows, function(row, index) {%>'
  +       '<% if (index !== 0) {%>'
  +         '<tr>'
  +           '<td class="delete-row"><div class="delete-row-btn">x</div></td>'
  +           '<% _.each(row, function(item) {%>'
  +             '<td contenteditable><%= item %></td>'
  +          '<% }) %>'
  +         '</tr>'
  +       '<% } %>'
  +    '<% }) %>'
  +   '</table>',
  // + '</div>',
  chart:
    '<div class="panel-heading clearfix">'
  +   '<div class="right">'
  +    '<input class="btn btn-default" type="button" id="savebtn" value="Save"> '
  +    '<input class="btn btn-default" type="button" id="publishbtn" value="Publish"> '
  +   '</div>'
  + '</div>'
  + '<div id="bonchart"></div>'
};