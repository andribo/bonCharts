define(['backbone', 'model', 'view', 'templatesConfig'], function (Backbone, Model, View, templatesConfig) {
  'use strict';
  return {
    initialize: function () {
      this.models = {};
      this.views = {};
      this.user = {};
      this.currentChart = {};
      this.$container = $('#page');
      this.$title = $('title');
      var that = this;
      $.ajax({
        type: "GET",
        url: "user",
        success: function(data) {
          
          that.user = data;
          if(that.user.id) {
            $('#unlogined').css('display', 'none');
              $('#logined').css('display', 'block');
              $('#nameUser').html(that.user.name);
            } else {
              $('#unlogined').css('display', 'block');
              $('#logined').css('display', 'none');
            }
          // console.log(that.app.user);
        },
        error: function(a, b, c) {
          alert("Error" + a + b + c);
        }
      });
      if (typeof (Storage) !== "undefined") {
        if (sessionStorage.bonChartsModel) {
          this.models.chartSettings = new Model.ChartSettingsCollection(JSON.parse(sessionStorage.bonChartsModel));
        }
      }
    },
    run: function () {
      var thatApp = this;
      this.router = new(Backbone.Router.extend({
        routes: {
          '': 'startPage',
          'makechart': 'makeChartPage',
          'editor': 'editorPage',
          'about': 'about',
          'publish': 'publishPage'
        },
        createAppView: function (template, templateConfig) {
          if (thatApp.views.appView) {
            thatApp.views.appView.undelegateEvents();
          }
          thatApp.views.appView = new View.AppView({
            el: thatApp.$container,
            template: template,
            templateConfig: templateConfig,
            app: thatApp
          });
        },
        startPage: function () {
          var thatRouter = this;
          $.ajax('js/app/temp/pagesTemplates/mainPage.html')
            .then(function (result) {
              thatApp.$title.text('bonCharts');
              thatApp.$container.removeClass();
              thatApp.$container.addClass('main-page');
              $('.navbar-nav').find('li').removeClass();
              $('.navbar-nav').find('[href="#"]').parent().addClass('active');
              thatRouter.createAppView(result);
            });
        },
        makeChartPage: function () {
          var thatRouter = this;
          $.ajax('js/app/temp/pagesTemplates/makeChartPage.html')
            .then(function (result) {
              thatApp.$title.text('Select Chart');
              thatApp.$container.removeClass();
              thatApp.$container.addClass('make-chart-page');
              $('.navbar-nav').find('li').removeClass();
              $('.navbar-nav').find('[href="#makechart"]').parent().addClass('active');
              thatRouter.createAppView(result, templatesConfig.makeChartList);
            });
        },
        editorPage: function () {
          var thatRouter = this;
          if (!thatApp.models.chartSettings) {
            this.navigate('makechart', {
              trigger: true
            });
          }
          else {
            $.ajax('js/app/temp/pagesTemplates/editorPage.html')
              .then(function (result) {
                thatApp.$title.text('Editor');
                thatApp.$container.removeClass();
                thatApp.$container.addClass('editor-page');
                $('.navbar-nav').find('li').removeClass();
                $('.navbar-nav').find('[href="#editor"]').parent().addClass('active');
                thatRouter.createAppView(result);

                thatApp.views.settingsTreeView = new View.SettingsTreeView({
                  el: '#settings-tree',
                  collection: thatApp.models.chartSettings,
                  template: templates.settingsTree,
                  templatesConfig: templatesConfig
                });

                thatApp.views.chartView = new View.ChartView({
                  el: '#chart-view',
                  collection: thatApp.models.chartSettings,
                  template: templates.chart,
                  app: thatApp
                });

                thatApp.views.dataView = new View.DataView({
                  el: '#data-view',
                  collection: thatApp.models.chartSettings,
                  template: templates.data
                });

                thatApp.models.chartSettings.trigger('change', {});
              });
          }
        },
        publishPage: function () {
          var thatRouter = this;
          $.ajax('js/app/temp/pagesTemplates/publishPage.html')
            .then(function (result) {
              thatApp.$title.text('Publish bonCharts');
              thatApp.$container.removeClass();
              thatApp.$container.addClass('publish-page');
              thatRouter.createAppView(result);
            });
        },
        about: function () {
          var thatRouter = this;
          $.ajax('js/app/temp/pagesTemplates/aboutPage.html')
            .then(function (result) {
              thatApp.$title.text('About bonCharts');
              thatApp.$container.removeClass();
              thatApp.$container.addClass('about-page');
              thatRouter.createAppView(result);
            });
        }
      }));

      Backbone.history.start();
    }
  };
});
