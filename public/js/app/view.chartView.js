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
      'click #savebtn': 'saveChart'
      
    },
    chart: null,
    timeOut: undefined,
    saveChart: function() {
      $('#chartName').val(this.app.currentChart.name);
      $('#chartDescription').val(this.app.currentChart.description);
      $('#chartPublic').prop('checked', this.app.currentChart['public']);
      // console.log(this.app.currentChart);
    },
    render: function () {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout((function () {
        
        this.$el.html(this.template());

        $('#savebtn').prop('disabled', this.app.user.id === undefined);
        $('#publishbtn').prop('disabled', true);

        var miscellaneousModel = this.collection.getModelByName('miscellaneous');
        
        try {
          var c3config = bonCharts.toC3(this.collection.toJSON());
          this.chart = c3.generate(c3config);
          var $chartContainerElement = $(this.chart.element);
            this.chart.resize({
             height: $chartContainerElement.parent().height() - 10
          });
        } catch (error) {
          // console.log(error);
        }
      }).bind(this), 500);
    }
  });
});