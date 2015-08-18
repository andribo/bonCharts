[{
  "name": "title",
  "title_text": "Chart Title",
  "title_position": "top-center",
  "title_padding_top": 0,
  "title_padding_right": 0,
  "title_padding_bottom": 0,
  "title_padding_left": 0
}, {
  "name": "miscellaneous",
  "bindto": "chart",
  "interaction_enabled": true,
  "transition_duration": 350,
  "zoom_enabled": true,
  "chart_data_type": "bar",
  "axis_rotated": false
}, {
  "name": "data_settings",
  "data_empty_label_text": "No Data",
  "data_groups": [],
  "data_order": "desc",
  "data_xFormat": "%Y-%m-%d",
  "data_selection_enabled": false,
  "data_selection_grouped": false,
  "data_selection_multiple": false
}, {
  "name": "legend",
  "legend_show": true,
  "legend_position": "bottom",
  "legend_inset_anchor": "top-left",
  "legend_inset_x": 10,
  "legend_inset_y": 0
}, {
  "name": "tooltip",
  "tooltip_show": true,
  "tooltip_grouped": true,
  "tooltip_format_title": "Data [[x]]",
  "tooltip_format_name": "[[name]]",
  "tooltip_format_value": "[[value]]",
  "tooltip_format_value_format": "",
  "tooltip_format_ratio_format": ".2%"
}, {
  "name": "axis_x",
  "axis_x_show": true,
  "axis_x_type": "timeseries",
  "axis_x_localtime": true,
  "axis_x_tick_fit": true,
  "axis_x_tick_multiline": true,
  "axis_x_label_text": "",
  "axis_x_label_position": "outer-center",
  "subchart_show": false,
  "subchart_size_height": 30,
  "subchart_axis_x_show": true,
  "axis_x_tick_format": "[[value]]",
  "axis_x_tick_value_format": "%d-%m-%Y"
}, {
  "name": "axis_y",
  "axis_y_show": true,
  "axis_y_inverted": false,
  "axis_y_label_text": "",
  "axis_y_label_position": "outer-middle",
  "axis_y_tick_format": "[[value]]",
  "axis_y_inner": false,
  "axis_y_tick_value_format": ""
}, {
  "name": "axis_y2",
  "axis_y2_show": true,
  "axis_y2_inverted": false,
  "axis_y2_label": "",
  "axis_y2_label_position": "outer-middle",
  "axis_y2_tick_format": "[[value]]₴",
  "axis_y2_inner": false,
  "axis_y2_tick_value_format": ""
}, {
  "name": "grid",
  "grid_x_show": false,
  "grid_x_lines": [{
    "value": 2,
    "text": "Label on 2",
    "position": "middle"
  }, {
    "value": 5,
    "text": "Label on 5",
    "class": "label-5"
  }, {
    "value": 4,
    "text": "Label on 4",
    "position": "start"
  }],
  "grid_y_show": false,
  "grid_y_lines": [{
    "value": 2,
    "text": "Label on 2",
    "position": "middle"
  }, {
    "value": 5,
    "text": "Label on 5",
    "class": "label-5"
  }, {
    "value": 4,
    "text": "Label on 4",
    "position": "start"
  }],
  "regions": [{
    "axis": "x",
    "start": 1,
    "end": 2,
    "class": "region-1-2"
  }]
}, {
  "name": "data",
  "data_rows": [
    ["x", "data1", "data2"],
    ["2013-01-01", "30", "130"],
    ["2013-01-02", "200", "340"],
    ["2013-01-03", "100", "200"],
    ["2013-01-04", "400", "500"],
    ["2013-01-05", "150", "250"],
    ["2013-01-06", "250", "350"]
  ]
}, {
  "name": "pie_donut",
  "pie_label_show": true,
  "pie_label_format": "[[ratio]]",
  "pie_label_value_format": "",
  "pie_label_ratio_format": ".1%",
  "pie_label_threshold": 0.05,
  "pie_expand": true,
  "donut_label_show": true,
  "donut_label_format": "[[ratio]]",
  "donut_label_value_format": "",
  "donut_label_ratio_format": ".1%",
  "donut_label_threshold": 0.05,
  "donut_title": "",
  "donut_expand": true,
  "donut_expand_duration": 50
}, {
  "name": "line_bar",
  "point_show": true,
  "point_r": 2.5,
  "point_focus_expand_enabled": true,
  "line_connectNull": false,
  "line_step_type": "step",
  "bar_width_ratio": 0.95,
  "bar_width": 41
}, {
  "name": "series_1",
  "data_y": "data1",
  "data_name": "DATA 1",
  "data_x": "x",
  "data_class": "",
  "data_y2": false,
  "data_labels_show": false,
  "data_labels_format": "[[value]]",
  "data_labels_format_value": "",
  "data_use_custom_color": false,
  "data_color": "#ffffff",
  "data_hide": false,
  "legend_hide": false
}, {
  "name": "series_2",
  "data_y": "data2",
  "data_name": "DATA 2",
  "data_x": "x",
  "data_class": "",
  "data_y2": true,
  "data_labels_show": false,
  "data_labels_format": "[[value]]",
  "data_labels_format_value": "",
  "data_use_custom_color": false,
  "data_color": "#ffffff",
  "data_hide": false,
  "legend_hide": false
}]
