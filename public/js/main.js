requirejs.config({
  baseUrl: 'js/app',
 shim: {
  bootstrap: { deps: ['jquery']},
  xlsx: { exports: 'XLSX'},
  bonCharts: { exports: 'bonCharts'}
 },
  paths: {
    jquery: '../lib/jquery-1.11.3',
    underscore: '../lib/underscore',
    backbone: '../lib/backbone',
    d3: '../lib/d3',
    c3: '../lib/c3-0.4.11-rc3.min',
    xlsx: '../lib/xlsx.min',
    bootstrap: '../lib/bootstrap.min',
    bonCharts: './bonCharts',
    app: './app',
    model: './model',
    view: './view',
    appView: './view.appView',
    settingsTreeView: './view.settingsTreeView',
    settingsView: './view.settingsView',
    chartView: './view.chartView',
    dataView: './view.dataView',
  }
});

requirejs(['app'], function (app) {
  app.initialize();
  app.run();
});