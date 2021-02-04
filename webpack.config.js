const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  output: {
    filename: 'falorem.min.js',
    library: 'Falorem',
    libraryTarget: 'umd',
    sourceMapFilename: 'falorem.min.map',
    path: path.resolve(__dirname, 'lib'),
    umdNamedDefine: true,
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
