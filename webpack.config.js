const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'html', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
   
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './html'),
      components: path.resolve(__dirname, './html/components'),
      middleware: path.resolve(__dirname, './html/middleware'),
      routes: path.resolve(__dirname, './html/routes'),
      assets: path.resolve(__dirname, './html/assets'),
      utils: path.resolve(__dirname, './html/utils'),
      pages: path.resolve(__dirname, './html/pages'),
      layouts: path.resolve(__dirname, './html/layouts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  devServer: {
    static: path.join(__dirname, './html'),
    port: 8080,
    hot: 'only',
    compress: true,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
};
