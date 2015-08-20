// ------------------------------------------------------------------------
define(['backbone', 'd3', 'xlsx'], function (Backbone, d3, XLSX) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.collection = options.collection;
      this.template = _.template(options.template);
      this.render();
    },
    events: {
      'input #data-table': 'change',
      'change #data-file': 'fileLoad',
      'click .delete-row-btn': 'deleteRow',
      'click .delete-col-btn': 'deleteColumn',
      'click #addcolumn': 'addColumn',
      'click #addrow': 'addRow'
    },
    change: function (e) {
      var data = [];
      var table = document.getElementById('data-table');
      for(var i = 0; i < table.rows.length; i += 1) {
        data.push([]);
        for(var j = 1; j < table.rows[i].cells.length; j += 1) {
          data[i][j - 1] = table.rows[i].cells[j].innerText || null;
        }
      }
      var model = this.collection.getModelByName('data');
      
      model.set('data_rows', data);
    },
    fileLoad: function (e) {
      var that = this,
          model = this.collection.getModelByName('data'),
          reader = new FileReader(),
          file = e.target.files[0],
          fileName = e.target.files[0].name;

      reader.onload =  function(e) {
        var data = e.target.result || e.srcElement,
            rows = [],
            workbook;

        if (fileName.lastIndexOf('.csv') !== -1) {
          rows = d3.csv.parseRows(data);
        } else if (fileName.lastIndexOf('.tsv') !== -1) {
          rows = d3.tsv.parseRows(data);
        } else {
          try {
            workbook = XLSX.read(data, {type: 'binary'});
            rows = d3.csv.parseRows(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
          } catch (error) {
          }
        }
        model.set('data_rows', rows);
        that.render();
      };
      if (file.size <= 1048576) {
        if (/.csv$|.tsv$/ig.test(fileName)) {
          reader.readAsText(file);
        } else if (/.xls$|.xlsx$|xlsm$|.xlsb$|.ods$|.xml$/ig.test(fileName)) {
          reader.readAsBinaryString(file);
        }
      } else {
      }
    },
    deleteColumn: function (e) {
      var columnIndex = $(e.target).parent().index() - 1;
      var model = this.collection.getModelByName('data');
      var dataRows = model.get('data_rows').slice(0);

      dataRows = dataRows.map(function (row) {
        var newRow = [];
        for (var i = 0; i < row.length; i += 1) {
          if (i !== columnIndex) {
            newRow.push(row[i]);
          }
        }
        return newRow;
      });
      model.set('data_rows', dataRows);
      this.render();
    },
    deleteRow: function (e) {
      var rowIndex = $(e.target).parent().parent().index();
      var model = this.collection.getModelByName('data');
      var dataRows = model.get('data_rows').slice(0);
      dataRows.splice(rowIndex + 1, 1);
      model.set('data_rows', dataRows);
      $(e.target).parent().parent().remove();
    },
    addColumn: function (e) {
      var model = this.collection.getModelByName('data');
      var dataRows = model.get('data_rows').slice(0);
      dataRows.forEach(function (elem) {
        elem.push(null);
      });
      dataRows[0][dataRows[0].length - 1] = 'column' + dataRows[0].length;
      model.set('data_rows', dataRows);
      this.render();
    },
    addRow: function (e) {
      var model = this.collection.getModelByName('data');
      var dataRows = model.get('data_rows').slice(0);
      dataRows.push(dataRows[0].map(function () { return null; }));
      model.set('data_rows', dataRows);
      this.render();
    },
    render: function (e) {
      var dataRows = this.collection.getModelByName('data').get('data_rows');
      this.$el.html(this.template({
        rows: dataRows
      }));
      return this;
    }
  });
});