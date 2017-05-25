module.exports = {
  entry: './src/landing.jsx',
  output: {
    path: __dirname + '/dist/',
    filename: 'landing.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}