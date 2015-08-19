// В'юшка для побудови графіка
// Ця в'юшка реагує на зміну нашої моделі (точніше, колекції моделей, але то не суттєво) і перерисовує графік.
// Щоб перетворити дані з моделі в налаштування графіка, викликається метод configureChart
define(['backbone', 'c3', 'bonCharts'], function (Backbone, c3, bonCharts) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.collection = options.collection;
      this.template = _.template(options.template);
      this.app = options.app;
      this.listenTo(this.collection, 'change add remove', this.render);
    },
    events: {
     // 'click #publishbtn': 'publishChart',
      'click #savebtn': 'saveChart'
      
    },
    chart: null,
    timeOut: undefined,
    saveChart: function() {
      $('#chartName').val(this.app.currentChart.name);
      $('#chartDescription').val(this.app.currentChart.description);
      $('#chartPublic').prop('checked', this.app.currentChart['public']);
      console.log(this.app.currentChart);
    },
    // publishChart: function (e) {
    //   this.app.router.navigate('publish', {
    //     trigger: true
    //   });
    // },
    

    render: function () {
      // console.log('rendered');
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout((function () {
        // this.$el.empty();
        this.$el.html(this.template());
        var miscellaneousModel = this.collection.getModelByName('miscellaneous');
        // var bindto = miscellaneousModel.get('bindto');
        // var width = miscellaneousModel.get('size_width');
        // var height = miscellaneousModel.get('size_height');
        // this.$el.append('<div id="bonchart"></div>');
        // try {
          var c3config = bonCharts.toC3(this.collection.toJSON());
          // console.log("REndee");
          // console.log(this.collection.toJSON());
          // console.log("Chart set");
          // console.log(this.app.models.chartSettings.toJSON());
          console.log("EQui");
          console.log(this.app.models.chartSettings === this.collection);
         // this.app.models.chartSettings = this.collection;
          this.chart = c3.generate(c3config);
          // $('#bonchart').width(width);
          // $('#bonchart').height(height);
          // console.log(this.chart);
          // if (!c3config.size.height) {
            var $chartContainerElement = $(this.chart.element);
            this.chart.resize({
             height: $chartContainerElement.parent().height() - 10
            });
          // }
        // } catch (error) {
        //   console.log(error);
        // }
      }).bind(this), 500);
      // return this;
    }
  });
});