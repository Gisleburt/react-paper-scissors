import path from 'path';

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

export default {
  entry: './src/index.jsx',
  output: {
    filename: 'app.js',
    path: BUILD_DIR,
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  }
}
