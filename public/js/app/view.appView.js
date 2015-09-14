define(['backbone', 'model', 'bootstrap'], function(Backbone, Model) {
  return Backbone.View.extend({
    initialize: function(options) {
      // console.log("INITCCC")
      this.el = options.el;
      this.$content = this.$el.find('#content')
      this.template = _.template(options.template);
      this.templateConfig = options.templateConfig;
      this.app = options.app;
      if (this.templateConfig && this.templateConfig[0] && this.templateConfig[0].name === 'user') {
        var that = this;
        $.ajax({
          type: "GET",
          url: "/data/" + that.app.user.id,
          success: function(data) {

            that.templateConfig[0].items = data;
            that.render();
            if (that.app.user.id && that.templateConfig[0].items.length) {
              $('.nav-tabs a[href="#user"]').tab('show');
            } else {
              $('.nav-tabs a[href="#bar"]').tab('show');
            }
          },
          error: function(a, b, c) {
            alert("Error" + a + b + c);
          }
        });
      } else {
        this.render();
      }
    },
    events: {
      'click #makechartbtn': 'makeChart',
      'click .chartitem': 'selectChart',
      'click #selectchartcancel': 'selectChartCancel',
      'click #charttabs a': 'selectChartType',
      'click #checksubmit': 'logination',
      'click #publishbtn': 'publish',
      'click #redirectbtn': 'redirectToView',
      'mousedown #submitChart': 'submitChart',
      'click #postFB': 'postFacebook',
      'click #postTW': 'postTwitter'
    },
    logination: function(e) {

      var that = this;
      $.ajax({
        type: "POST",
        data: $('#loginForm').serialize(),
        url: "/login",
        success: function(data) {
          var user = {};
          if (data.id) {
            user = {
              id: data.id,
              name: data.name
            }
          }
          that.app.user = user;

          // that.app.user = data;
          // console.log(that.app.user);
          if (!that.app.user.id) {
            alert("Wrong email or password");
          } else {
            $("#login").modal('hide');
            $('#unlogined').css('display', 'none');
            $('#logined').css('display', 'block');
            $('#nameUser').html(that.app.user.name);
            that.app.router.navigate('', {
              trigger: true
            });
          }
        },
        error: function(a, b, c) {
          alert("Error" + a + b + c);
        }
      });
    },
    render: function() {
      this.$content.empty();
      this.$content.append(this.template({
        chartList: this.templateConfig
      }));
      return this;
    },
    postFacebook: function() {
      var url = 'http://' + window.location.host + '/' + this.app.currentChart.id;
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + url);
    },
    postTwitter: function() {
      var url = 'http://' + window.location.host + '/' + this.app.currentChart.id;
      window.open('https://twitter.com/intent/tweet?url=' + url);
    },
    redirectToView: function() {
      window.open($('#chartURL').val());
    },
    makeChart: function() {
      this.app.router.navigate('makechart', {
        trigger: true
      });
    },
    publish: function() {
      var url,
        model,
        frameWidth,
        frameHeight,
        frame;

      url = 'http://' + window.location.host + '/' + this.app.currentChart.id;

      model = this.app.models.chartSettings.getModelByName('miscellaneous');
      frameWidth = model.get('size_width') || 500;
      frameHeight = model.get('size_height') || 350;
      frame = '<iframe width="' + frameWidth + '" height="' + frameHeight + '" src="' + url + '" frameborder="0"></iframe>'
     
      $('#chartURL').val(url);
      $('#chartFrame').val(frame);
    },
    generateUniqueID: function() {
      return Math.random().toString(36).substr(2, 9);
    },
    iven: [],
    submitChart: function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#save').modal('hide');
      var owner = this.app.user.id;
      var name = $('#chartName').val();
      var description = $('#chartDescription').val();
      var publicChart = $('#chartPublic').prop('checked');
      var data = this.app.models.chartSettings.toJSON();
      var id = this.app.currentChart.id;
      // console.log(owner, this.app.currentChart.owner, id);
      if (owner !== this.app.currentChart.owner) {
        id = this.generateUniqueID();
      }

      var toServer = {
        "id": id,
        "name": name,
        "description": description,
        "public": publicChart,
        "owner": owner,
        "data": data
      };
      this.app.currentChart = toServer;

      var request = $.ajax({
        url: "/save",
        async: true,
        type: "POST",
        data: JSON.stringify(toServer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });
     
      $('#publishbtn').prop('disabled', false);
    },
    selectChart: function(e) {
      var self = this;
      // console.log('/charts/' + e.currentTarget.id);
      $.ajax({
        url: '/charts/' + e.currentTarget.id,
        success: function(result) {
          // console.log(result);
          var chartData = JSON.parse(result);
          self.app.currentChart.name = chartData.name;
          self.app.currentChart.description = chartData.description;
          self.app.currentChart['public'] = chartData['public'];
          self.app.currentChart.owner = chartData.owner;
          self.app.currentChart.id = e.currentTarget.id;
          self.app.models.chartSettings = new Model.ChartSettingsCollection(chartData.data);
          self.app.router.navigate('editor', {
            trigger: true
          });
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // console.log(jqXHR, textStatus, errorThrown);
        }
      });
    },
    selectChartType: function(e) {
      // e.preventDefault();
      // // console.log(this);
      // $(this).tab('show');
    },
    selectChartCancel: function() {
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