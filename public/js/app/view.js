define([
    'backbone',
    'appView',
    'settingsTreeView',
    'settingsView',
    'chartView',
    'dataView'
  ],
  function (Backbone, AppView, SettingsTreeView, SettingsView, ChartView, DataView) {
    var view = {};
    view.AppView = AppView;
    view.SettingsTreeView = SettingsTreeView;
    view.SettingsView = SettingsView;
    view.ChartView = ChartView;
    view.DataView = DataView;
    return view;
  }
);