define(['backbone', 'model', 'bootstrap'], function (Backbone, Model) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.el = options.el;
      this.$content = this.$el.find('#content')
      this.template = _.template(options.template);
      this.templateConfig = options.templateConfig;
      this.app = options.app;
      console.log("init");
      if(this.templateConfig && this.templateConfig[0] && this.templateConfig[0].name === 'user') {
        var that = this;
        console.log("/data/" + that.app.user.id);
        $.ajax({
          type: "GET",
          url: "/data/" + that.app.user.id,
          success: function(data) {
            
            that.templateConfig[0].items = data;
            console.log(data);
            that.render();
            // var user = {};
            // if(data.id) {
            //   user = {
            //     id: data.id,
            //     name: data.name
            //   }
            // }
            // that.app.user = user;
            // // that.app.user = data;
            // console.log(that.app.user);
            // if(!that.app.user.id) {
            //     alert("Wrong email or error");
            //   }
            //   else {
            //     $("#login").modal('hide');
            //   }
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
      'click #makechart': 'makeChart',
      'click .chartitem': 'selectChart',
      'click #selectchartcancel': 'selectChartCancel',
      'click #charttabs a': 'selectChartType',
      'click #checksubmit': 'logination'
    },
    logination: function (e) {
      // e.stopPropagation();
      // $("#myModal").modal('hide');
      var that = this;
      // var url = "/login/"+$('#username').val(); // the script where you handle the form input.
      // console.log(url);
     
      
       $.ajax({
        type: "POST",
        data: $('#loginForm').serialize(),
        url: "/login",
        success: function(data) {
          var user = {};
          if(data.id) {
            user = {
              id: data.id,
              name: data.name
            }
          }
          that.app.user = user;
          // that.app.user = data;
          console.log(that.app.user);
          if(!that.app.user.id) {
              alert("Wrong email or error");
            }
            else {
              $("#login").modal('hide');
              that.app.router.navigate('', {trigger: true});
            }
        },
        error: function(a, b, c) {
          alert("Error" + a + b + c);
        }
      });
      // $.ajax({
      //      type: "GET",
      //      url: url,
      //      success: function(data)
      //      {
      //       console.log(data);
      //         that.app.user = data;
              
      //         // $("#myModal").modal('hide');
      //         // $("#login").modal('hide');
      //       //  $('#login').remove();
      //       if(!that.app.user.id) {
      //         alert("Wrong email or error");
      //       }
      //       else {
      //         $("#login").modal('hide');
      //       }
      //      },
      //      error: function(a,b,c) {
      //        alert("Error"+a+b+c);
      //      }
      //    });
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
      console.log('/charts/'+ e.currentTarget.id);
      $.ajax({
        url: '/charts/'+ e.currentTarget.id,
        success: function (result) {
          console.log(result);
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