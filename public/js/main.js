requirejs.config({
  baseUrl: 'js/app',
 shim: {
  // jquery: { exports: '$' },
  // underscore: { exports: '_' },
  // backbone: { exports: 'Backbone' },
  // d3: { exports: 'd3' },
  // c3: { exports: 'c3' },
  bootstrap: { deps: ['jquery']},
  xlsx: { exports: 'XLSX'},
  bonCharts: { exports: 'bonCharts'}
 },
  paths: {
    jquery: '../lib/jquery-1.11.3',
    underscore: '../lib/underscore',
    backbone: '../lib/backbone',
    d3: '../lib/d3',
    // c3: '../lib/c3-0.4.10.min',
    // c3: '../lib/c3-0.4.11-rc1.min',
    c3: '../lib/c3-0.4.11-rc3.min',
    // c3: '../lib/c3-0.4.11-rc3',
    xlsx: '../lib/xlsx.min',
    bootstrap: '../lib/bootstrap.min',
    // jszip: '../lib/jszip',
    
    bonCharts: './bonCharts',
    app: './app',
    model: './model',
    view: './view',
    appView: './view.appView',
    settingsTreeView: './view.settingsTreeView',
    settingsView: './view.settingsView',
    chartView: './view.chartView',
    dataView: './view.dataView',
    // templatesConfig: './templatesConfig'
  }
});

requirejs(['app'], function (app) {
  app.initialize();
  app.run();
});