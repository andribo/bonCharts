// В'юшка для побудови графіка
// Ця в'юшка реагує на зміну нашої моделі (точніше, колекції моделей, але то не суттєво) і перерисовує графік.
// Щоб перетворити дані з моделі в налаштування графіка, викликається метод configureChart
define(['backbone', 'c3'], function (Backbone, c3) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.collection = options.collection;
      this.template = _.template(options.template);
      this.app = options.app;
      this.listenTo(this.collection, 'change add remove', this.render);
    },
    events: {
      'click #publishbtn': 'publishChart'
    },
    chart: null,
    timeOut: undefined,
    publishChart: function (e) {
      this.app.router.navigate('publish', {
        trigger: true
      });
    },
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
          var c3config = this.collection.toC3()
          this.chart = c3.generate(c3config);
          // $('#bonchart').width(width);
          // $('#bonchart').height(height);
          // console.log(this.chart);
          if (!c3config.size.height) {
            var $chartContainerElement = $(this.chart.element);
            // this.chart.resize({
            //  height: $chartContainerElement.parent().height()
            // });
          }
        // } catch (error) {
        //   console.log(error);
        // }
      }).bind(this), 500);
      // return this;
    }
  });
});