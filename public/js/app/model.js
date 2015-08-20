define(['backbone'], function (Backbone) {
  'use strict';
  var model = {};
  model.ChartSettingsModel = Backbone.Model.extend();
  
  model.ChartSettingsCollection = Backbone.Collection.extend({
    model: model.ChartSettingsModel,
    initialize: function () {
      this.listenTo(this, 'change:chart_data_type', this.changeChartType);
      this.listenTo(this, 'change', this.saveToSessionStorage);
    },
    saveToSessionStorage: function () {
      if(typeof(Storage) !== "undefined") {
        sessionStorage.bonChartsModel = JSON.stringify(this);
      }
    },
    changeChartType: function () {
      this.filter(function (model) {
        return model.get('name').indexOf('series') !== -1;
      }).forEach(function (model) {
        model.set('data_type', undefined, { silent: true });
      });
    },
    getModelByName: function (name) {
      var i;
      for (i = 0; i < this.models.length; i += 1) {
        if (this.models[i].get('name') === name) {
          return this.models[i];
        }
      }
    },
    defaultSeries: function () {
      var seriesName = 'series_' + (this.filter(function (model) {
        return model.get('name').indexOf('series') !== -1;
      }).length + 1);

      return {
        name: seriesName,
        data_y: '',
        data_name: seriesName,
        data_x: '',
        data_class: '',
        data_y2: false,
        data_type: undefined,
        data_labels_show: false,
        data_labels_format: '[[value]]',
        data_labels_format_value: '',
        // data_regions: [{'start':1, 'end':2, 'style':'dashed'},{'start':3}],
        data_use_custom_color: false,
        data_color: '#ffffff',
        data_hide: false,
        legend_hide: false,
      }
    },
  })
  return model;
});
