const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] }
    ]
  },
  // devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: { vue$: 'vue/dist/vue.esm.js' }
  },
  watch: false,
  mode: 'production',
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: false,
    publicPath: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    useLocalIp: true,
    contentBase: path.join(__dirname, 'dist'),
    lazy: true,
    filename: 'undefined'
  }
};