const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.(css|scss)$/,
      use: [ 'style-loader', 'css-loader', "sass-loader" ]
    }, { 
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
      loader: 'file-loader?name=assets/fonts/[name].[ext]' 
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i, 
      loader: "file-loader?name=assets/imgs/[name].[ext]"
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      layouts: path.resolve(__dirname, 'src', 'layouts'),
      pages: path.resolve(__dirname, 'src', 'pages')
    }
  }
}