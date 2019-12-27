module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
};
