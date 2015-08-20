var bonCharts = {
  getPropertyByName: function (name, models) {
    var i, j;
    for(i = 0; i < models.length; i += 1)  {
      if (models[i].hasOwnProperty(name)) {
        return models[i][name];
      }
    }
  },
  toC3: function (models) {
    var c3config = {
      bindto: '#bonchart',
      title: {
        padding: {}
      },
      size: {},
      padding: {},
      interaction: {},
      transition: {},
      data: {
        rows: {},
        xs: {},
        names: {},
        classes: {},
        groups: [],
        axes: {},
        types: {},
        labels: {
          format: {}
        },
        regions: {},
        colors: {},
        hide: [],
        empty: {
          label: {}
        },
        selection: {},
      },
      axis: {
        x: {
          tick: {},
          padding: {},
          label: {}
        },
        y: {
          tick: {},
          padding: {},
          label: {}
        },
        y2: {
          tick: {},
          padding: {},
          label: {}
        }
      },
      grid: {
        x: {
          lines: []
        },
        y: {
          lines: []
        }
      },
      regions: [],
      legend: {
        hide: [],
        inset: {}
      },
      tooltip: {
        format: {}
      },
      subchart: {
        size: {}
      },
      zoom: {},
      point: {
        focus: {
          expand: {}
        },
        select: {}
      },
      line: {
        step: {}
      },
      area: {},
      bar: {},
      pie: {
        label: {}
      },
      donut: {
        label: {}
      }
    };

    // c3config.bindto = '#bonchart';
    // c3config.title = {};
    // c3config.title.padding = {};
    // c3config.size = {};
    // c3config.padding = {};
    // c3config.interaction = {};
    // c3config.transition = {};
    // c3config.data = {};
    // c3config.data.rows = {};
    // c3config.data.xs = {};
    // c3config.data.names = {};
    // c3config.data.classes = {};
    // c3config.data.groups = [];
    // c3config.data.axes = {};
    // c3config.data.types = {};
    // c3config.data.labels = {};
    // c3config.data.labels.format = {};
    // c3config.data.regions = {};
    // c3config.data.colors = {};
    // c3config.data.hide = [];
    // c3config.data.empty = {};
    // c3config.data.empty.label = {};
    // c3config.data.selection = {};
    // c3config.axis = {};
    // c3config.axis.x = {};
    // c3config.axis.x.tick = {};
    // c3config.axis.x.padding = {};
    // c3config.axis.x.label = {};
    // c3config.axis.y = {};
    // c3config.axis.y.label = {};
    // c3config.axis.y.tick = {};
    // c3config.axis.y.padding = {};
    // c3config.axis.y2 = {};
    // c3config.axis.y2.label = {};
    // c3config.axis.y2.tick = {};
    // c3config.axis.y2.padding = {};
    // c3config.grid = {};
    // c3config.grid.x = {};
    // c3config.grid.x.lines = [];
    // c3config.grid.y = {};
    // c3config.grid.y.lines = [];
    // c3config.regions = [];
    // c3config.legend = {};
    // c3config.legend.hide = [];
    // c3config.legend.inset = {};
    // c3config.tooltip = {};
    // c3config.tooltip.format = {};
    // c3config.subchart = {};
    // c3config.subchart.size = {};
    // c3config.zoom = {};
    // c3config.point = {};
    // c3config.point.focus = {};
    // c3config.point.focus.expand = {};
    // c3config.point.select = {};
    // c3config.line = {};
    // c3config.line.step = {};
    // c3config.area = {};
    // c3config.bar = {};
    // // c3config.bar.width = {};
    // c3config.pie = {};
    // c3config.pie.label = {};
    // c3config.donut = {};
    // c3config.donut.label = {};

    models.forEach(function (model) {
      

      if (model.name.indexOf('series') !== -1) {
        var seriesIndex = parseInt(model.name.substring(7));
      }

      for (var prop in model) {
        // var path = propMap[prop];
        // var value = model[prop];

        // switch() {
        //   case: '':
        //    value = (function (format, valueFormat, ratioFormat) {
        //       return function (value, ratio, id, index) {
        //         ratio = ratio === undefined ? '' : ratio;

        //         if (!format) {
        //           return '';
        //         }
                
        //           return format
        //             .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value))
        //             .replace(/\[\[ratio\]\]/g, d3.format(ratioFormat)(ratio))
        //             .replace(/\[\[id\]\]/g, id)
        //             .replace(/\[\[index\]\]/g, index);
        //       };
        //     })(model[prop], model['tooltip_format_value_format'], model['tooltip_format_ratio_format']);
        //     break;
        // }

        // _.set(c3config, path, model[prop]);


        switch (prop) {
        // miscellaneous ------------------------------------
          case 'chart_data_type':
            c3config.data.type = model[prop];
            c3config.data.types = {};
            break;
          case 'axis_rotated':
            c3config.axis.rotated = model[prop];
            break;
          // case 'bindto':
          //   c3config.bindto = '#' + model[prop];
          //   break;
          case 'interaction_enabled':
            c3config.interaction.enabled = model[prop];
            break;
          case 'transition_duration':
            c3config.transition.duration = model[prop];
            break;
          // case 'size_width':
          //   c3config.size.width = model[prop];
          //   break;
          // case 'size_height':
          //   c3config.size.height = model[prop];
          //   break;
          case 'padding_top':
            c3config.padding.top = model[prop];
            break;
          case 'padding_right':
            c3config.padding.right = model[prop];
            break;
          case 'padding_bottom':
            c3config.padding.bottom = model[prop];
            break;
          case 'padding_left':
            c3config.padding.left = model[prop];
            break;
          case 'zoom_enabled':
            c3config.zoom.enabled = model[prop];
            break;
        // subchart -----------------------------------------
          case 'subchart_show':
            c3config.subchart.show = model[prop];
            break;
          case 'subchart_size_height':
            c3config.subchart.size.height = model[prop];
            break;
          case 'subchart_axis_x_show':
            c3config.subchart.axis = {};
            c3config.subchart.axis.x = {};
            c3config.subchart.axis.x.show = model[prop];
            break;
        // data_settings
          case 'data_empty_label_text':
            c3config.data.empty.label.text = model[prop];
            break;
          case 'data_xFormat':
            c3config.data.xFormat = model[prop];
            break;
          case 'data_selection_enabled':
            c3config.data.selection = c3config.data.selection || {};
            c3config.data.selection.enabled = model[prop];
            break;
          case 'data_selection_grouped':
            c3config.data.selection = c3config.data.selection || {};
            c3config.data.selection.grouped = model[prop];
            break;
          case 'data_selection_multiple':
            c3config.data.selection = c3config.data.selection || {};
            c3config.data.selection.multiple = model[prop];
            break;
        // legend -------------------------------------------
          case 'legend_show':
            c3config.legend.show = model[prop];
            break;
          case 'legend_position':
            c3config.legend.position = model[prop];
            break;
          case 'legend_inset_anchor':
            c3config.legend.inset.anchor = model[prop];
            break;
          case 'legend_inset_x':
            c3config.legend.inset.x = model[prop];
            break;
          case 'legend_inset_y':
            c3config.legend.inset.y = model[prop];
            break;
          case 'legend_inset_step':
            c3config.legend.inset.step = model[prop];
            break;
        // tooltip ------------------------------------------
          case 'tooltip_show':
            c3config.tooltip.show = model[prop];
            break;
          case 'tooltip_grouped':
            c3config.tooltip.grouped = model[prop];
            break;
          // case 'tooltip_format_title':
          //   break;
          case 'tooltip_format_name':
            c3config.tooltip.format.name = (function (format, ratioFormat) {
              return function (name, ratio, id, index) {
                ratio = ratio === undefined ? '' : ratio;
                if (format) {
                  return format
                    .replace(/\[\[name\]\]/g, name)
                    .replace(/\[\[ratio\]\]/g, d3.format(ratioFormat)(ratio))
                    .replace(/\[\[id\]\]/g, id)
                    .replace(/\[\[index\]\]/g, index);
                } else {
                  return '';
                }
              };
            })(model[prop], model['tooltip_format_ratio_format']);
            break;
          case 'tooltip_format_value':
            c3config.tooltip.format.value = (function (format, valueFormat, ratioFormat) {
              return function (value, ratio, id, index) {
                ratio = ratio === undefined ? '' : ratio;
                if (format) {
                  return format
                    .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value))
                    .replace(/\[\[ratio\]\]/g, d3.format(ratioFormat)(ratio))
                    .replace(/\[\[id\]\]/g, id)
                    .replace(/\[\[index\]\]/g, index);
                } else {
                  return '';
                }
              };
            })(model[prop], model['tooltip_format_value_format'], model['tooltip_format_ratio_format']);
            break;
        // axis_x -------------------------------------------
          case 'axis_x_show':
            c3config.axis.x.show = model[prop];
            break;
          case 'axis_x_type':
            c3config.axis.x.type = model[prop];
            break;
          case 'axis_x_label_text':
            c3config.axis.x.label.text = model[prop];
            break;
          case 'axis_x_label_position':
            c3config.axis.x.label.position = model[prop];
            break;
          case 'axis_x_min':
            c3config.axis.x.min = model[prop];
            break;
          case 'axis_x_max':
            c3config.axis.x.max = model[prop];
            break;
          case 'axis_x_localtime':
            c3config.axis.x.localtime = model[prop];
            break;
          case 'axis_x_tick_fit':
            c3config.axis.x.tick.fit = model[prop];
            break;
          case 'axis_x_tick_rotate':
            c3config.axis.x.tick.rotate = model[prop];
            break;
          case 'axis_x_tick_multiline':
            c3config.axis.x.tick.multiline = model[prop];
            break;
          case 'axis_x_tick_format':
            c3config.axis.x.tick = c3config.axis.x.tick || {};
            if (/%Y|%m|%d|%H|%M|%S/g.test(model['axis_x_tick_value_format'])) {
              c3config.axis.x.tick.format = model['axis_x_tick_value_format'];
            } else {
              c3config.axis.x.tick.format = (function (format, valueFormat) {
                return function (value) {
                  if (format) {
                    return format
                      .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value));
                  } else {
                    return '';
                  }
                };
              })(model[prop], model['axis_x_tick_value_format']);
            }
            break;
          case 'axis_x_height':
            c3config.axis.x.height = model[prop];
            break;
          case 'axis_x_padding_left':
            c3config.axis.x.padding.left = model[prop];
            break;
          case 'axis_x_padding_right':
            c3config.axis.x.padding.right = model[prop];
            break;
        // axis_y -------------------------------------------
          case 'axis_y_show':
            c3config.axis.y.show = model[prop];
            break;
          case 'axis_y_label_text':
            c3config.axis.y.label.text = model[prop];
            break;
          case 'axis_y_label_position':
            c3config.axis.y.label.position = model[prop];
            break;
          case 'axis_y_inverted':
            c3config.axis.y.inverted = model[prop];
            break;
          case 'axis_y_inner':
            c3config.axis.y.inner = model[prop];
            break;
          case 'axis_y_tick_format':
            c3config.axis.y.tick = c3config.axis.y.tick || {};
            c3config.axis.y.tick.format = (function (format, valueFormat) {
              return function (value) {
                if (format) {
                  return format
                    .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value));
                } else {
                  return '';
                }
              };
            })(model[prop], model['axis_y_tick_value_format']);
            break;
          case 'axis_y_center':
            c3config.axis.y.center = model[prop];
            break;
          case 'axis_y_min':
            c3config.axis.y.min = model[prop];
            break;
          case 'axis_y_max':
            c3config.axis.y.max = model[prop];
            break;
          case 'axis_y_padding_top':
            c3config.axis.y.padding.top = model[prop];
            break;
          case 'axis_y_padding_bottom':
            c3config.axis.y.padding.bottom = model[prop];
            break;
        // axis_y2 ------------------------------------------
          case 'axis_y2_show':
            c3config.axis.y2.show = model[prop];
            break;
          case 'axis_y2_label_text':
            c3config.axis.y2.label.text = model[prop];
            break;
          case 'axis_y2_label_position':
            c3config.axis.y2.label.position = model[prop];
            break;
          case 'axis_y2_inverted':
            c3config.axis.y2.inverted = model[prop];
            break;
          case 'axis_y2_inner':
            c3config.axis.y2.inner = model[prop];
            break;
          case 'axis_y2_tick_format':
            c3config.axis.y2.tick = c3config.axis.y2.tick || {};
            c3config.axis.y2.tick.format = (function (format, valueFormat) {
              return function (value) {
                if (format) {
                  return format
                    .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value));
                } else {
                  return '';
                }
              };
            })(model[prop], model['axis_y2_tick_value_format']);
            break;
          case 'axis_y2_center':
            c3config.axis.y2.center = model[prop];
            break;
          case 'axis_y2_min':
            c3config.axis.y2.min = model[prop];
            break;
          case 'axis_y2_max':
            c3config.axis.y2.max = model[prop];
            break;
          case 'axis_y2_padding_top':
            c3config.axis.y2.padding.top = model[prop];
            break;
          case 'axis_y2_padding_bottom':
            c3config.axis.y2.padding.bottom = model[prop];
            break;
        // chart area ---------------------------------------
        // title --------------------------------------------
          case 'title_text':
            c3config.title.text = model[prop];
            break;
          case 'title_position':
            c3config.title.position = model[prop];
            break;
          case 'title_padding_top':
            c3config.title.padding.top = model[prop] || 0;
            break;
          case 'title_padding_right':
            c3config.title.padding.right = model[prop] || 0;
            break;
          case 'title_padding_bottom':
            c3config.title.padding.bottom = model[prop] || 0;
            break;
          case 'title_padding_left':
            c3config.title.padding.left = model[prop] || 0;
            break;
        // grid & lines -------------------------------------
          case 'grid_x_show':
            c3config.grid.x.show = model[prop];
            break;
          case 'grid_y_show':
            c3config.grid.y.show = model[prop];
            break;
            
        // regions ------------------------------------------

        // pie_donut ----------------------------------------
          case 'pie_label_show':
            c3config.pie.label.show = model[prop];
            break;
          case 'pie_label_format':
            c3config.pie.label.format = (function (format, valueFormat, ratioFormat) {
              return function (value, ratio, id) {
                if (format) {
                  return format
                    .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value))
                    .replace(/\[\[ratio\]\]/g, d3.format(ratioFormat)(ratio));
                } else {
                  return '';
                }
              };
            })(model[prop], model['pie_label_value_format'], model['pie_label_ratio_format']);
            break;
          case 'pie_label_threshold':
            c3config.pie.label.threshold = model[prop];
            break;
          case 'pie_expand':
            c3config.pie.expand = model[prop];
            break;
          case 'donut_title':
            c3config.donut.title = model[prop];
            break;
          case 'donut_label_show':
            c3config.donut.label.show = model[prop];
            break;
          case 'donut_label_format':
            c3config.donut.label.format = (function (format, valueFormat, ratioFormat) {
              return function (value, ratio, id) {
                if (format) {
                  return format
                    .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value))
                    .replace(/\[\[ratio\]\]/g, d3.format(ratioFormat)(ratio));
                } else {
                  return '';
                }
              };
            })(model[prop], model['donut_label_value_format'], model['donut_label_ratio_format']);
            break;
          case 'donut_label_threshold':
            c3config.donut.label.threshold = model[prop];
            break;
          case 'donut_expand':
            c3config.donut.expand = model[prop];
            break;
        // line_bar -----------------------------------------
          case 'point_show':
            c3config.point.show = model[prop];
            break;
          case 'point_r':
            c3config.point.r = model[prop];
            break;
          case 'point_focus_expand_enabled':
            c3config.point.focus.expand.enabled = model[prop];
            break;
          case 'point_focus_expand_r':
            c3config.point.focus.expand.r = model[prop];
            break;
          case 'point_select_r':
            c3config.point.select.r = model[prop];
            break;
          case 'line_connectNull':
            c3config.line.connectNull = model[prop];
            break;
          case 'line_step_type':
            c3config.line.step.type = model[prop];
            break;
          // case 'bar_width':
          //    // if (typeof(c3config.bar.width) === 'number') {
          //    //  c3config.bar.width = model[prop]
          //    // }
          //   break;
          case 'bar_width_ratio':
            // if (typeof(c3config.bar.width) === 'object') {
              c3config.bar.width = c3config.bar.width || {};
              c3config.bar.width.ratio = model[prop];
            // }
            break;
        // data ---------------------------------------------
          case 'data_url':
            c3config.data.url = model[prop];
            break;
          case 'data_rows':
            c3config.data.rows = model[prop];
            break;
        // series -------------------------------------------
          case 'data_name':
            if (model.data_y && model[prop]) {
              c3config.data.names = c3config.data.names || {};
              c3config.data.names[model.data_y] = model[prop];
            }
            break;
          case 'data_x':
            if (model.data_y && model[prop]) {
              // c3config.data.xs = c3config.data.xs || {};
              c3config.data.xs[model.data_y] = model[prop];
              // console.log(c3config.data.xs);
            }
            break;
          case 'data_y2':
            if (model.data_y) {
              c3config.data.axes[model.data_y] = model[prop] ? 'y2' : 'y';
            }
            break;
          case 'data_type':
            if (model.data_y && model[prop]) {
              c3config.data.types[model.data_y] = model[prop];
            }
            break;
          case 'data_labels_format':
            if (model.data_y) {
              c3config.data.labels = c3config.data.labels || {};
              c3config.data.labels.format = c3config.data.labels.format || {};
              c3config.data.labels.format[model.data_y] = (function (labels_show, format, valueFormat) {
                return function (value, id, index, j) {
                  if (labels_show) {
                    if (format) {
                      return format
                        .replace(/\[\[value\]\]/g, d3.format(valueFormat)(value))
                        .replace(/\[\[index\]\]/g, index);
                    } else {
                      return '';
                    }
                  }
                };
              })(model['data_labels_show'], model[prop], model['data_labels_format_value']);
            }
            break;
          case 'data_order':
            if (model.data_y) {
              c3config.data.order = model[prop] || null;
            }
            break;
          case 'data_color':
            if (model.data_y) {
              c3config.data.colors = c3config.data.colors || {};
              c3config.data.colors[model.data_y] = model['data_use_custom_color'] ? model[prop] : undefined;
            }
           break;
          case 'data_hide':
            if (model.data_y && model[prop]) {
              c3config.data.hide.push(model.data_y);
            }
            break;
          case 'legend_hide':
            if (model.data_y && model[prop]) {
              c3config.legend.hide.push(model.data_y);
            }
            break;
        }
      }
    });

    c3config.tooltip.format.title = (function (format, isTimeseries, xAxisTickValueFormat) {
      // c3 has a bug if axis x type is 'category'
      return (function (x) {
        x = x === undefined ? '' : x;
        // if (x && this.axis.x.type == 'category') {
        //   x = 'category ' + x;
        // }
        if (isTimeseries && xAxisTickValueFormat) {
          x = d3.time.format(xAxisTickValueFormat)(new Date(x));
        }
        // console.log(x);
        return format ? format.replace(/\[\[x\]\]/g, x) : '';
      });//.bind(c3config);
    })(this.getPropertyByName('tooltip_format_title', models), c3config.axis.x.type == 'timeseries', this.getPropertyByName('axis_x_tick_value_format', models)); //c3config.axis.x.type == 'timeseries'

    c3config.onresize = function () {
      // console.log(this);
      // if (!c3config.size.height) {
        var $chartContainerElement = $('#bonchart');
        this.api.resize({
          height: $chartContainerElement.parent().height() - 10
        });
      // }
    };

    if (c3config.data.xs) {
      var value, sameX = true;
      for (var key in c3config.data.xs) {
        if (!value) {
          value = c3config.data.xs[key]
        } else {
          if ( c3config.data.xs[key] !== value) {
            sameX = false;
            break;
          }
        }
      }
      if (sameX) {
        c3config.data.xs = {};
        c3config.data.x = value;
      }
    }
    // console.log(c3config.data.xs);
    // window.c3config = c3config;
    // console.log(JSON.stringify(c3config));
    return c3config;
  }

};