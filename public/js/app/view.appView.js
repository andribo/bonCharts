define(['backbone', 'model', 'bootstrap'], function (Backbone, Model) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.$content = this.$el.find('#content')
      this.template = _.template(options.template);
      this.templateConfig = options.templateConfig;
      this.app = options.app;
      this.render();
    },
    events: {
      'click #makechart': 'makeChart',
      'click .chartitem': 'selectChart',
      'click #selectchartcancel': 'selectChartCancel',
      'click #charttabs a': 'selectChartType'
    },
    render: function () {
      this.$content.empty();
      this.$content.append(this.template({
        chartList: this.templateConfig
      }));
      return this;
    },
    makeChart: function () {
      this.app.router.navigate('makechart', {
        trigger: true
      });
    },
    selectChart: function (e) {
      var self = this;
      $.ajax({
        url: '/js/app/temp/charts/' + e.target.id + '.js',
        success: function (result) {
          self.app.models.chartSettings = new Model.ChartSettingsCollection(JSON.parse(result));
          self.app.router.navigate('editor', {
            trigger: true
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR, textStatus, errorThrown);
        }
      });
    },
    selectChartType: function (e) {
      // e.preventDefault();
      // console.log(this);
      // $(this).tab('show');
    },
    selectChartCancel: function () {
      // console.log('selectChartCancel');
      // console.log(JSON.stringify(this.app.models.chartSettings.toJSON()));
      if (this.app.models.chartSettings) {
        this.app.router.navigate('editor', {
          trigger: true
        });
      } else {
        this.app.router.navigate('', {
          trigger: true
        });
      }
    }
  });
});