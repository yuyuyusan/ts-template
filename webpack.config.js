const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/app.ts',
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            const relativePath = pathData.filename.replace('src/', '');
          },
          parser: {
            dataUrlCondition: {
              maxSize: 100 * 1024,
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
