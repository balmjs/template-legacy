const balm = require('balm');
const path = require('path');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
balm.config = {
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'css' // Default use PostCSS
  },
  scripts: {
    entry: './app/scripts/index.js',
    alias: {
      '@': path.resolve(__dirname, 'app/scripts'),
      jq: path.resolve(__dirname, 'app/scripts/jquery.js')
    },
    // NOTE: for no AMD/CommonJS version of the legacy vendor modules
    // webpackOptions: {
    //   module: {
    //     noParse: []
    //   }
    // }
    ie8: true
  },
  logs: {
    level: 2
  }
  // More Config
};

balm.go();
