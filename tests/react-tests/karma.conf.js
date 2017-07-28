var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'ChromeHeadless', 'Firefox' ], // run in Chrome and Firefox
    singleRun: true, // set this to false to leave the browser open
    frameworks: [ 'mocha' ], // use the mocha test framework
    files: [
      { pattern: path.resolve(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'), watched: false },
      { pattern: path.resolve(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js'), watched: false },
      'tests.webpack.js' // just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] // preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots', 'html', 'json-result' ], // report results in these formats
    htmlReporter: {
      outputFile: path.resolve(__dirname, '../../site/libraries/react/results.html'),
      pageTitle: 'React + Custom Elements',
      groupSuites: true,
      useCompactStyle: true
    },
    jsonResultReporter: {
      outputFile: path.resolve(__dirname, '../../site/libraries/react/results.json')
    },
    webpack: { // kind of a copy of your webpack config
      // devtool: 'inline-source-map', // just do inline source maps instead of the default
      resolve: {
        modules: [
          path.resolve(__dirname, '../webcomponents/src'),
          path.resolve(__dirname, './node_modules')
        ]
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    },
    webpackServer: {
      // noInfo: true // please don't spam the console when running in karma!
    }
  });
};