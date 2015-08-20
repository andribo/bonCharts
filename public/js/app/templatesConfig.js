define([], function ()
{
  return {
    makeChartList: [
      {
        name: 'user',
        text: 'User',
        items: [
        ]
      },
      {
        name: 'bar',
        text: 'Bar',
        items: [
          {
            name: 'indexed',
            description: '',
            id: 'indexedbar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'category',
            description: '',
            id: 'categorybar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'timeseries',
            description: '',
            id: 'timeseriesbar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'timeseries, yearly',
            description: '',
            id: 'timeseriesyearlybar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'secondary Y axis',
            description: '',
            id: 'y2bar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'category with subchart',
            description: 'category columns with scroll',
            id: 'subchartbar',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'bar and line',
            description: '',
            id: 'barline',
            imageSrc: '/images/bar.png'
          },
          {
            name: 'rotated column and line',
            description: '',
            id: 'rotatedcolumnline',
            imageSrc: '/images/bar.png'
          },
        ]
      },
      {
        name: 'line',
        text: 'Line',
        items: [
          {
            name: 'line',
            description: '',
            id: 'line',
            imageSrc: '/images/newarea.png'
          },
          {
            name: 'rotated line',
            description: '',
            id: 'rotatedline',
            imageSrc: '/images/newarea.png'
          },
          {
            name: 'diferent X line',
            description: '',
            id: 'diferentxline',
            imageSrc: '/images/newarea.png'
          },
          {
            name: 'smoothed line',
            description: '',
            id: 'smoothedline',
            imageSrc: '/images/newarea.png'
          },
          {
            name: 'step line',
            description: '',
            id: 'stepline',
            imageSrc: '/images/newarea.png'
          },
          {
            name: 'date series, yearly',
            description: '',
            id: 'dateseriesyearlyline',
            imageSrc: '/images/newarea.png'
          }
        ]
      },
      {
        name: 'area',
        text: 'Area',
        items: [
          {
            name: 'area',
            description: '',
            id: 'area',
            imageSrc: '/images/newline.png'
          },
          {
            name: 'rotated area',
            description: '',
            id: 'rotatedarea',
            imageSrc: '/images/newline.png'
          },
          {
            name: 'smoothed area',
            description: '',
            id: 'smoothedarea',
            imageSrc: '/images/newline.png'
          },
          {
            name: 'step area',
            description: '',
            id: 'steparea',
            imageSrc: '/images/newline.png'
          },
          {
            name: 'date series, yearly',
            description: '',
            id: 'dateseriesyearlyarea',
            imageSrc: '/images/newline.png'
          }
        ]
      },
      {
        name: 'piedonut',
        text: 'Pie & Donut',
        items: [
          {
            name: 'donut',
            description: '',
            id: 'donutpiedonut',
            imageSrc: '/images/donut.png'
          },
          {
            name: 'pie',
            description: '',
            id: 'piepiedonut',
            imageSrc: '/images/pie.png'
          }
        ]
      },
      {
        name: 'other',
        text: 'Other',
        items: [
          {
            name: 'scatter',
            description: '',
            id: 'scatter',
            imageSrc: '/images/other.png'
          },
          {
            name: 'mixed',
            description: '',
            id: 'mixedother',
            imageSrc: '/images/other.png'
          }
        ]
      }
    ],
    settingsTree: [
      // general
      {
        name: 'general',
        text: 'General settings',
        items: [
        {
          name: 'miscellaneous'
        },
        {
          name: 'data_settings'
        }]
      },
      // legend
      {
        name: 'legend',
      },
      // tooltip
      {
        name: 'tooltip',
      },
      // axes
      {
        name: 'axes',
        text: 'Axes',
        items: [
        {
          name: 'axis_x'
        },
        {
          name: 'axis_y'
        },
        {
          name: 'axis_y2'
        }]
      },
      {
        name: 'chart_area',
        text: 'Chart Area',
        items: [
        {
          name: 'title'
        },
        {
          name: 'grid',
        }]
      },
      // series
      {
        name: 'series',
        text: 'Series',
        items: []
      },
      // pie_donut
      {
        name: 'pie_donut',
      },
      // line_bar
      {
        name: 'line_bar'
      }
    ],
    title: [
      'Title',
      {
        name: 'title_text',
        type: 'text',
        title: 'Text',
        description: ''
      },
      {
        name: 'title_position',
        type: 'select',
        title: 'Position',
        options: ['top-left', 'top-center', 'top-right'],
        description: ''
      },
      {
        name: 'title_padding_top',
        type: 'number',
        title: 'Padding top',
        min: 0,
        max: 100,
        step: 1,
        description: ''
      },
      {
        name: 'title_padding_right',
        type: 'number',
        title: 'Padding right',
        min: 0,
        max: 100,
        step: 1,
        description: ''
      },
      {
        name: 'title_padding_bottom',
        type: 'number',
        title: 'Padding bottom',
        min: 0,
        max: 100,
        step: 1,
        description: ''
      },
      {
        name: 'title_padding_left',
        type: 'number',
        title: 'Padding left',
        min: 0,
        max: 100,
        step: 1,
        description: ''
      }
    ],
    miscellaneous: [
      'Miscellaneous',
      {
        name: 'chart_data_type',
        type: 'select',
        title: 'Type',
        options: ['line', 'spline', 'step', 'area', 'area-spline', 'area-step', 'bar', 'scatter', 'pie', 'donut'],
        description: ''
      },
      {
        name: 'axis_rotated',
        type: 'checkbox',
        title: 'Rotated Axis',
        def: 'false',
        description: ''
      },
      // {
      //   name: 'bindto',
      //   type: 'text',
      //   def: 'chart',
      //   title: 'Bind to',
      //   description: ''
      // },
      {
        name: 'interaction_enabled',
        type: 'checkbox',
        title: 'Interaction',
        def: 'false',
        description: ''
      },
      {
        name: 'transition_duration',
        type: 'number',
        title: 'Transition',
        def: 350,
        min: 0,
        max: 500,
        description: ''
      },
      {
        name: 'size_width',
        type: 'number',
        title: 'Chart width',
        description: ''
      },
      {
        name: 'size_height',
        type: 'number',
        title: 'Chart height',
        description: ''
      },
      {
        name: 'padding_top',
        type: 'number',
        title: 'Padding top',
        description: ''
      },
      {
        name: 'padding_right',
        type: 'number',
        title: 'Padding left',
        description: ''
      },
      {
        name: 'padding_bottom',
        type: 'number',
        title: 'Padding bottom',
        description: ''
      },
      {
        name: 'padding_left',
        type: 'number',
        title: 'Padding right',
        description: ''
      },
      {
        name: 'zoom_enabled',
        type: 'checkbox',
        def: 'false',
        title: 'Enable Zoom',
        description: ''
      }
    ],
    data_settings: [
      'Data',
      {
        name: 'data_empty_label_text',
        type: 'text',
        def: '',
        title: 'Data empty text',
        description: ''
      },
      {
        name: 'data_order',
        type: 'select',
        title: 'Order',
        options: ['not set', 'asc', 'desc'],
        description: ''
      },
      {
        name: 'data_xFormat',
        type: 'datalist',
        title: 'X time format',
        options: ['%Y-%m-%d %H:%M:%S', '%d-%m-%Y'],
        description: ''
      },
      // {
      //   name: 'data_groups',
      //   type: 'text',
      //   title: 'NOT Group data',
      //   // options: [],
      //   description: ''
      // },
      {
        name: 'data_selection_enabled',
        type: 'checkbox',
        title: 'Selection Enabled',
        def: false,
        description: ''
      },
      {
        name: 'data_selection_grouped',
        type: 'checkbox',
        title: 'Selection Grouped',
        def: false,
        description: ''
      },
      {
        name: 'data_selection_multiple',
        type: 'checkbox',
        title: 'Selection Multiple',
        def: false,
        description: ''
      }
    ],
    legend: [
      'Legend',
      {
        name: 'legend_show',
        type: 'checkbox',
        title: 'Show',
        def: false,
        description: ''
      },
      {
        name: 'legend_position',
        type: 'select',
        title: 'Position',
        def: 'bottom',
        options: ['bottom', 'right', 'inset'],
        description: ''
      },
      {
        name: 'legend_inset_anchor',
        type: 'select',
        title: 'Inset anchor',
        def: 'top-left',
        options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        description: ''
      },
      {
        name: 'legend_inset_x',
        type: 'number',
        title: 'Inset x',
        step: 1,
        description: ''
      },
      {
        name: 'legend_inset_y',
        type: 'number',
        title: 'Inset y',
        step: 1,
        description: ''
      },
      {
        name: 'legend_inset_step',
        type: 'number',
        title: 'Inset Step',
        min: 0,
        max: 10,
        step: 1,
        description: ''
      }
    ],
    tooltip: [
      'Tooltip',
      {
        name: 'tooltip_show',
        type: 'checkbox',
        title: 'Show',
        def: false,
        description: ''
      },
      {
        name: 'tooltip_grouped',
        type: 'checkbox',
        title: 'Grouped',
        def: true,
        description: ''
      },
      {
        name: 'tooltip_format_title',
        type: 'datalist',
        title: 'Title',
        options: ['[[x]]'],
        description: ''
      },
      {
        name: 'tooltip_format_name',
        type: 'datalist',
        title: 'Series name',
        options: ['[[name]]', '[[id]]', '[[index]]', '[[ratio]]'],
        description: ''
      },
      {
        name: 'tooltip_format_value',
        type: 'datalist',
        title: 'Series value',
        options: ['[[value]]', '[[id]]', '[[index]]', '[[ratio]]'],
        description: ''
      },
      {
        name: 'tooltip_format_value_format',
        type: 'datalist',
        title: 'Series value format',
        options: ['d', 'e', 's', 'f', '$', '%'],
        description: ''
      },
      {
        name: 'tooltip_format_ratio_format',
        type: 'datalist',
        title: 'Series ratio format',
        options: ['%', '.1%', '.2%', '.3%'],
        description: ''
      }
    ],
    axis_x: [
      'X Axis',
      {
        name: 'axis_x_show',
        type: 'checkbox',
        title: 'Show',
        def: false,
        description: ''
      },
      {
        name: 'axis_x_type',
        type: 'select',
        title: 'Type',
        def: 'indexed',
        options: ['indexed', 'category', 'timeseries'],
        description: ''
      },
      {
        name: 'axis_x_label_text',
        type: 'text',
        title: 'Label',
        def: 'X Axis',
        description: ''
      },
      {
        name: 'axis_x_label_position',
        type: 'select',
        title: 'Label position',
        def: 'inner-right',
        options: ['inner-right', 'inner-center', 'inner-left', 'outer-right', 'outer-center', 'outer-left'],
        description: ''
      },
      {
        name: 'axis_x_min',
        type: 'number',
        title: 'Min',
        def: '',
        description: ''
      },
      {
        name: 'axis_x_max',
        type: 'number',
        title: 'Max',
        def: '',
        description: ''
      },
      {
        name: 'axis_x_localtime',
        type: 'checkbox',
        title: 'Localtime',
        def: true,
        description: ''
      },
      {
        name: 'axis_x_tick_fit',
        type: 'checkbox',
        title: 'Tick fit',
        def: true,
        description: ''
      },
      {
        name: 'axis_x_tick_rotate',
        type: 'number',
        title: 'Tick rotate',
        def: 0,
        min: 0,
        max: 270,
        step: 1,
        description: ''
      },
      {
        name: 'axis_x_tick_multiline',
        type: 'checkbox',
        title: 'Tick multiline',
        def: true,
        description: ''
      },
      {
        name: 'axis_x_tick_format',
        type: 'datalist',
        title: 'Tick',
        options: ['[[value]]'],
        description: ''
      },
      {
        name: 'axis_x_tick_value_format',
        type: 'datalist',
        title: 'Tick value format',
        options: ['d', 'e', 's', 'f', '$', '%', '.1%', '.2%', '.3%', '%Y-%m-%d', '%d-%m-%Y', '%d-%m-%Y %H:%M:%S'],
        description: ''
      },
      {
        name: 'axis_x_height',
        type: 'number',
        title: 'Height',
        def: undefined,
        description: ''
      },
      {
        name: 'axis_x_padding_left',
        type: 'number',
        title: 'Padding left',
        def: undefined,
        description: ''
      },
      {
        name: 'axis_x_padding_right',
        type: 'number',
        title: 'Padding right',
        def: undefined,
        description: ''
      },
      {
        name: 'subchart_show',
        type: 'checkbox',
        title: 'Show Subchart',
        def: 'false',
        description: ''
      },
      {
        name: 'subchart_size_height',
        type: 'number',
        def: 40,
        min: 10,
        max: 100,
        title: 'Subchart Height',
        description: ''
      },
      {
        name: 'subchart_axis_x_show',
        type: 'checkbox',
        title: 'Show Subchart X Axis',
        def: 'false',
        description: ''
      }
    ],
    axis_y: [
      'Y Axis',
      {
        name: 'axis_y_show',
        type: 'checkbox',
        title: 'Show',
        def: false,
        description: ''
      },
      {
        name: 'axis_y_label_text',
        type: 'text',
        title: 'Label',
        def: 'Y Axis',
        description: ''
      },
      {
        name: 'axis_y_label_position',
        type: 'select',
        title: 'Label position',
        def: 'inner-top',
        options: ['inner-top', 'inner-middle', 'inner-bottom', 'outer-top', 'outer-middle', 'outer-bottom'],
        description: ''
      },
      {
        name: 'axis_y_inverted',
        type: 'checkbox',
        title: 'Inverted',
        def: false,
        description: ''
      },
      {
        name: 'axis_y_inner',
        type: 'checkbox',
        title: 'Inner',
        def: false,
        description: ''
      },
      {
        name: 'axis_y_tick_format',
        type: 'datalist',
        title: 'Tick',
        options: ['[[value]]'],
        description: ''
      },
      {
        name: 'axis_y_tick_value_format',
        type: 'datalist',
        title: 'Tick value format',
        options: ['d', 'e', 's', 'f', '$', '%', '.1%', '.2%', '.3%'],
        description: ''
      },
      {
        name: 'axis_y_center',
        type: 'number',
        title: 'Center',
        def: '',
        description: ''
      },
      {
        name: 'axis_y_min',
        type: 'number',
        title: 'Min',
        def: '',
        description: ''
      },
      {
        name: 'axis_y_max',
        type: 'number',
        title: 'Max',
        def: '',
        description: ''
      },
      {
        name: 'axis_y_padding_top',
        type: 'number',
        title: 'Padding top',
        def: undefined,
        description: ''
      },
      {
        name: 'axis_y_padding_bottom',
        type: 'number',
        title: 'Padding bottom',
        def: undefined,
        description: ''
      }
    ],
    axis_y2: [
      'Y2 Axis',
      {
        name: 'axis_y2_show',
        type: 'checkbox',
        title: 'Show',
        def: false,
        description: ''
      },
      {
        name: 'axis_y2_label_text',
        type: 'text',
        title: 'Label',
        def: 'Y2 Axis',
        description: ''
      },
      {
        name: 'axis_y2_label_position',
        type: 'select',
        title: 'Label position',
        def: 'inner-top',
        options: ['inner-top', 'inner-middle', 'inner-bottom', 'outer-top', 'outer-middle', 'outer-bottom'],
        description: ''
      },
      {
        name: 'axis_y2_inverted',
        type: 'checkbox',
        title: 'Inverted',
        def: false,
        description: ''
      },
      {
        name: 'axis_y2_inner',
        type: 'checkbox',
        title: 'Inner',
        def: false,
        description: ''
      },
      {
        name: 'axis_y2_tick_format',
        type: 'datalist',
        title: 'Tick',
        options: ['[[value]]'],
        description: ''
      },
      {
        name: 'axis_y2_tick_value_format',
        type: 'datalist',
        title: 'Tick value format',
        options: ['d', 'e', 's', 'f', '$', '%', '.1%', '.2%', '.3%'],
        description: ''
      },
      {
        name: 'axis_y2_center',
        type: 'number',
        title: 'Center',
        def: '',
        description: ''
      },
      {
        name: 'axis_y2_min',
        type: 'number',
        title: 'Min',
        def: '',
        description: ''
      },
      {
        name: 'axis_y2_max',
        type: 'number',
        title: 'Max',
        def: '',
        description: ''
      },
      {
        name: 'axis_y2_padding_top',
        type: 'number',
        title: 'Padding top',
        def: undefined,
        description: ''
      },
      {
        name: 'axis_y2_padding_bottom',
        type: 'number',
        title: 'Padding bottom',
        def: undefined,
        description: ''
      }
    ],
    grid: [
      'Grid',
      // 'Grid, Lines & Regions',
      {
        name: 'grid_x_show',
        type: 'checkbox',
        title: 'Show X grid',
        def: false,
        description: ''
      },
      // {
      //   name: 'grid_x_lines',
      //   type: 'multi',
      //   options: [
      //   {
      //     name: 'grid_x_lines_value',
      //     type: 'number',
      //     title: 'Value',
      //     description: ''
      //   },
      //   {
      //     name: 'grid_x_lines_text',
      //     type: 'text',
      //     title: 'Text',
      //     description: ''
      //   },
      //   {
      //     name: 'grid_x_lines_position',
      //     type: 'select',
      //     title: 'Position',
      //     options: ['start', 'middle', 'end'],
      //     description: ''
      //   },
      //   {
      //     name: 'grid_x_lines_class',
      //     type: 'text',
      //     title: 'CSS Class',
      //     description: ''
      //   }],
      //   description: ''
      // },
      {
        name: 'grid_y_show',
        type: 'checkbox',
        title: 'Show Y grid',
        def: false,
        description: ''
      },
      // {
      //   name: 'grid_y_lines',
      //   type: 'multi',
      //   options: [
      //   {
      //     name: 'grid_y_lines_value',
      //     type: 'number',
      //     title: 'Value',
      //     description: ''
      //   },
      //   {
      //     name: 'grid_y_lines_text',
      //     type: 'text',
      //     title: 'Text',
      //     description: ''
      //   },
      //   {
      //     name: 'grid_y_lines_position',
      //     type: 'select',
      //     title: 'Position',
      //     options: ['start', 'middle', 'end'],
      //     description: ''
      //   },
      //   {
      //     name: 'grid_y_lines_class',
      //     type: 'text',
      //     title: 'CSS Class',
      //     description: ''
      //   }],
      //   description: ''
      // },
      // {
      //   name: 'regions',
      //   type: 'multi',
      //   options: [
      //   {
      //     name: 'regions_axis',
      //     type: 'select',
      //     title: 'Axis',
      //     options: ['x', 'y', 'y2'],
      //     description: ''
      //   },
      //   {
      //     name: 'regions_start',
      //     type: 'number',
      //     title: 'Start',
      //     description: ''
      //   },
      //   {
      //     name: 'regions_end',
      //     type: 'text',
      //     title: 'End',
      //     description: ''
      //   },
      //   {
      //     name: 'regions_class',
      //     type: 'text',
      //     title: 'CSS Class',
      //     description: ''
      //   }],
      //   description: ''
      // }
    ],
    series: [
      'Series',
      {
        name: 'data_y',
        type: 'select',
        title: 'Value field',
        description: ''
      },
      {
        name: 'data_name',
        type: 'text',
        title: 'Title',
        description: ''
      },
      {
        name: 'data_x',
        type: 'select',
        title: 'X value field',
        description: ''
      },
      {
        name: 'data_y2',
        type: 'checkbox',
        title: 'Use secondary Y axis',
        description: ''
      },
      {
        name: 'data_type',
        type: 'select',
        title: 'Type',
        options: ['not set', 'line', 'spline', 'step', 'area', 'area-spline', 'area-step', 'bar', 'scatter'],
        description: ''
      },
      {
        name: 'data_labels_show',
        type: 'checkbox',
        title: 'Show labels',
        description: ''
      },
      {
        name: 'data_labels_format',
        type: 'datalist',
        title: 'Labels',
        options: ['[[value]]', '[[index]]'],
        description: ''
      },
      {
        name: 'data_labels_format_value',
        type: 'datalist',
        title: 'Labels value format',
        options: ['d', 'e', 's', 'f', '$', '%', '.1%', '.2%', '.3%'],
        description: ''
      },
      {
        name: 'data_use_custom_color',
        type: 'checkbox',
        title: 'Use Custom Color',
        description: ''
      },
      {
        name: 'data_color',
        type: 'color',
        title: 'Color',
        description: ''
      },
      {
        name: 'data_hide',
        type: 'checkbox',
        title: 'Hide',
        description: ''
      },
      {
        name: 'legend_hide',
        type: 'checkbox',
        title: 'Hide in legend',
        description: ''
      }
      // {
      //   name: 'tooltip_show',
      //   type: 'checkbox',
      //   title: 'Show tooltip',
      //   description: ''
      // },
      // {
      //   name: 'tooltip_format_title',
      //   type: 'text',
      //   title: 'Tooltip title',
      //   description: ''
      // },
      // {
      //   name: 'tooltip_format_value',
      //   type: 'text',
      //   title: 'Tooltip value',
      //   description: ''
      // }
      // {
      //   name: 'data_regions',
      //   type: 'multi',
      //   title: 'Regions',
      //   options: [
      //     {
      //       name: 'data_regions_start',
      //       type: 'number',
      //       description: ''
      //     },
      //     {
      //       name: 'data_regions_end',
      //       type: 'number',
      //       description: ''
      //     }
      //   ],
      //   description: ''
      // }
    ],
    pie_donut: [
      'Pie and donut settings',
      {
        name: 'pie_label_show',
        type: 'checkbox',
        title: 'Show Pie Label',
        def: false,
        description: ''
      },
      {
        name: 'pie_label_format',
        type: 'datalist',
        title: 'Pie Label',
        options: ['[[value]]', '[[ratio]]'],
        description: ''
      },
      {
        name: 'pie_label_value_format',
        type: 'datalist',
        title: 'Pie Label Value Format',
        options: ['d', 'e', 's', 'f', '$', '%'],
        description: ''
      },
      {
        name: 'pie_label_ratio_format',
        type: 'datalist',
        title: 'Pie Label Ratio Format',
        options: ['%', '.1%', '.2%', '.3%'],
        description: ''
      },
      {
        name: 'pie_label_threshold',
        type: 'number',
        title: 'Pie Label Threshold',
        min: 0.01,
        max: 1.0,
        step: 0.01,
        description: ''
      },
      {
        name: 'pie_expand',
        type: 'checkbox',
        title: 'Pie Expand',
        def: false,
        description: ''
      },
      {
        name: 'donut_title',
        type: 'text',
        title: 'Donut title',
        description: ''
      },
      {
        name: 'donut_label_show',
        type: 'checkbox',
        title: 'Show Donut Label',
        def: false,
        description: ''
      },
      {
        name: 'donut_label_format',
        type: 'datalist',
        title: 'Donut Label',
        options: ['[[value]]', '[[ratio]]'],
        description: ''
      },
      {
        name: 'donut_label_value_format',
        type: 'datalist',
        title: 'Donut Label Value Format',
        options: ['d', 'e', 's', 'f', '$', '%'],
        description: ''
      },
      {
        name: 'donut_label_ratio_format',
        type: 'datalist',
        title: 'Donut Label Ratio Format',
        options: ['%', '.1%', '.2%', '.3%'],
        description: ''
      },
      {
        name: 'donut_label_threshold',
        type: 'number',
        title: 'Donut Label Threshold',
        min: 0.01,
        max: 1.0,
        step: 0.01,
        description: ''
      },
      {
        name: 'donut_expand',
        type: 'checkbox',
        title: 'Donut Expand',
        def: false,
        description: ''
      }
    ],
    line_bar: [
      'Point, line, bar and similiar settings',
      {
        name: 'point_show',
        type: 'checkbox',
        title: 'Show Point',
        def: false,
        description: ''
      },
      {
        name: 'point_r',
        type: 'number',
        title: 'Point Radius',
        min: 0,
        step: 0.1,
        description: ''
      },
      {
        name: 'point_focus_expand_enabled',
        type: 'checkbox',
        title: 'Expand Point on Focus',
        def: false,
        description: ''
      },
      {
        name: 'point_focus_expand_r',
        type: 'number',
        title: 'Expanded Point Radius',
        min: 0,
        step: 0.1,
        description: ''
      },
      {
        name: 'point_select_r',
        type: 'number',
        title: 'Selected Point Radius',
        min: 0,
        step: 0.1,
        description: ''
      },
      {
        name: 'line_connectNull',
        type: 'checkbox',
        title: 'Line Connect Null',
        def: false,
        description: ''
      },
      {
        name: 'line_step_type',
        type: 'select',
        title: 'Line Step Type',
        options: ['step', 'step-before', 'step-after'],
        description: ''
      },
      // {
      //   name: 'bar_width',
      //   type: 'number',
      //   title: 'Bar Width',
      //   description: ''
      // },
      {
        name: 'bar_width_ratio',
        type: 'number',
        title: 'Bar Width Ratio',
        min: 0.05,
        max: 1.0,
        step: 0.05,
        description: ''
      }
    ],
    getPropertyByName: function (propertyName, settingsArray)
    {
      settingsArray = settingsArray || [];
      for (var i = 0; i < settingsArray.length; i += 1)
      {
        if (settingsArray[i].name === propertyName)
        {
          return settingsArray[i];
        }
      }
    }
  };
});
