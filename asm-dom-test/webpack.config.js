var resolve = require('path').resolve;

module.exports = env => {
  return {
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    node: {
      fs: 'empty',
    },
    devServer: {
      contentBase: resolve(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.wasm$/,
          loaders: ['arraybuffer-loader'],
        }
      ]
    }
  };
}