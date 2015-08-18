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
      'click .delete-row-btn': 'deleteRow'
      // 'change #dataurl': 'fileUrlLoad'
    },
    change: function (e) {
      var data = [];
      var table = document.getElementById('data-table');
      for(var i = 0; i < table.rows.length; i += 1) {
        data.push([]);
        for(var j = 0; j < table.rows[i].cells.length; j += 1) {
          data[i][j] = table.rows[i].cells[j].innerHTML;
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
          // try {
            workbook = XLSX.read(data, {type: 'binary'});
            rows = d3.csv.parseRows(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
          // } catch (error) {

          // }
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
        console.log('Error: File is too big');
      }
    },
    // fileUrlLoad: function (e) {
    //   var model = this.collection.getModelByName('data');
    //   model.set('data_url', $(e.target).val());
    //   console.log($(e.target).val());
    // },
    deleteRow: function (e) {
      var rowIndex = $(e.target).parent().parent().index();
      $(e.target).parent().parent().remove();
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