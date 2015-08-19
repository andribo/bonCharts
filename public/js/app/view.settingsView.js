// В'юшка для побудови області з конкретними налаштуваннями
define(['backbone'], function (Backbone) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'panel panel-default',
    initialize: function (options) {
      this.model = options.model;
      this.name = options.model.get('name');
      this.dataModel = options.dataModel;
      this.template = _.template(options.template);
      this.templateConfig = options.templateConfig;
      if (this.dataModel) {
        this.listenTo(this.dataModel, 'change:data_rows', this.updateSeriesDataXYControls);
      }
    },
    events: {
      'change .setting-property': 'setProperty',
    },
    setProperty: function (e) {
      var value;
      console.log(e.target.id, e.target.type, 'change event');
      switch (e.target.type) {
        case 'checkbox':
          this.model.set(e.target.id, e.target.checked);
          break;
        case 'number':
          value = parseFloat($(e.target).val());
          value = isNaN(value) ? undefined : value;
          this.model.set(e.target.id, value);
          break;
        case 'select-one':
          value = $(e.target).val();
          value = value === 'not set' ? undefined : value;
          this.model.set(e.target.id, value);
          break;
        default:
          this.model.set(e.target.id, $(e.target).val());
          break;
      };
    },
    render: function (e) {
      this.$el.html(this.template({
        settings: this.templateConfig,
        data: this.model.toJSON()
      }));
      return this;
    },
    updateSeriesDataXYControls: function () {
      var data_rows = this.dataModel.get('data_rows');
//      console.log(data_rows);
      var prevData_rows = this.dataModel.previous('data_rows');
//      if (prevData_rows && prevData_rows[0].length !== data_rows[0].length) {
        var $dataX = $('#data_x');
        var $dataY = $('#data_y');
        var dataXValue = this.model.get('data_x');
        $dataX.find('option').remove().end().append($('<option>', { value: undefined, text: 'not set' }));
        var dataYValue = this.model.get('data_y');
        $dataY.find('option').remove().end().append($('<option>', { value: undefined, text: 'not set' }));
        if (!data_rows.length) {
          return;
        }
        var row = data_rows[0];
        row.forEach(function (elem) {
          $dataX.append($('<option>', { value: elem, text: elem }));
          $dataY.append($('<option>', { value: elem, text: elem }));
        });
        $dataX.find('option[value="' + dataXValue + '"]').prop('selected', 'selected');
        $dataY.find('option[value="' + dataYValue + '"]').prop('selected', 'selected');
//      }
    }
  });
});