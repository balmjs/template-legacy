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
    entry: {
      polyfill: './app/scripts/polyfill.js',
      main: './app/scripts/index.js'
    },
    alias: {
      '@': path.resolve(__dirname, 'app/scripts')
    },
    ie8: true
  },
  logs: {
    level: 2
  }
  // More Config
};

balm.go();
