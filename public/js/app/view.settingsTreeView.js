// В'юшка для побудови дерева налаштувань
define(['backbone', 'settingsView'], function (Backbone, SettingsView) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.collection = options.collection;
      this.template = _.template(options.template);
      this.templatesConfig = options.templatesConfig;
      this.changeChartType(); // like render

//      this.render();
      this.listenTo(this.collection, 'change:chart_data_type', this.changeChartType);
      this.listenTo(this.collection, 'add remove', this.render);
      this.settingsView = null;
      this.$settings = $('#settings');
      this.changeSettingsView({ target: { id: 'miscellaneous'}});
    },
    events: {
      'click .settings-tree-item': 'changeSettingsView',
      'click .add-series-btn': 'addSeries',
      'click .delete-series-btn': 'deleteSeries'
    },
    changeSettingsView: function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      var modelName = e.target.id,
          model = this.collection.getModelByName(modelName),
          isSeriesModel = modelName.indexOf('series') !== -1,
          viewOptions = {};
      
      if (model) {
        if (this.settingsView) {
          this.settingsView.remove();
        }

        viewOptions.model = model;
        viewOptions.template = templates.settings;
        if (isSeriesModel) {
          viewOptions.dataModel = this.collection.getModelByName('data');
          viewOptions.templateConfig = this.templatesConfig['series'];
        } else {
          viewOptions.templateConfig = this.templatesConfig[modelName];
        }

        this.settingsView = new SettingsView(viewOptions);
        this.$settings.append(this.settingsView.render().el);
        if (isSeriesModel) {
          this.settingsView.updateSeriesDataXYControls();
        }
      }
    },
    addSeries: function (e) {
    	this.collection.add(this.collection.defaultSeries());
    },
    deleteSeries: function (e) {
    	var seriesName = e.target.id.substring(13);
    	this.collection.remove(this.collection.getModelByName(seriesName));
    	if (this.settingsView.name === seriesName) {
    		this.changeSettingsView({ target: { id: 'miscellaneous'}});
    	}
    },
    changeChartType: function () {
      var type = this.collection.getModelByName('miscellaneous').get('chart_data_type');
      var isPieDonut = 'pie donut'.indexOf(type) !== -1;
  
      this.templatesConfig.getPropertyByName('axes', this.templatesConfig.settingsTree).hidden = isPieDonut;
      this.templatesConfig.getPropertyByName('pie_donut', this.templatesConfig.settingsTree).hidden = !isPieDonut;
      this.templatesConfig.getPropertyByName('line_bar', this.templatesConfig.settingsTree).hidden = isPieDonut;

      this.templatesConfig.getPropertyByName('grid', this.templatesConfig.getPropertyByName('chart_area', this.templatesConfig.settingsTree).items).hidden = isPieDonut;
      
      this.templatesConfig.getPropertyByName('axis_rotated', this.templatesConfig.miscellaneous).hidden = isPieDonut;
      this.templatesConfig.getPropertyByName('zoom_enabled', this.templatesConfig.miscellaneous).hidden = isPieDonut;

      this.templatesConfig.getPropertyByName('tooltip_grouped', this.templatesConfig.tooltip).hidden = isPieDonut;

      this.templatesConfig.getPropertyByName('data_x', this.templatesConfig.series).hidden = isPieDonut;
      this.templatesConfig.getPropertyByName('data_y2', this.templatesConfig.series).hidden = isPieDonut;
      this.templatesConfig.getPropertyByName('data_type', this.templatesConfig.series).hidden = isPieDonut;
      
      if (this.settingsView) {
        this.settingsView.render();
      }
      this.render();
    },
    _fillSeriesItems: function () {
      var series = this.templatesConfig.settingsTree.filter(function (elem) {
        return elem.name === 'series'
      })[0];
      series.items = [];
      this.collection.filter(function (model) {
        return model.get('name').indexOf('series') !== -1;
      }).forEach(function (model, index) {
        series.items.push({
          name: model.get('name')
        });
      });
    },
    render: function () {
      this._fillSeriesItems();
      this.$el.html(this.template({
        settingsTree: this.templatesConfig.settingsTree,
        settings: this.templatesConfig
      }));
      return this;
    }
  });
});