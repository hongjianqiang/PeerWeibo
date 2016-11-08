module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + "/client/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
      { test: /\.json$/, loader: "json" },
      { test: /\.vue$/, loader: "vue" },
      { test: /\.(otf|eot|svg|ttf|woff|woff2)\w*/, loader: "file-loader?name=/fonts/[name].[ext]" },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=/images/[name].[ext]'}
    ]
  },

  vue: {
  	loaders: { js: "babel" }
  },
  
  devServer: {
    contentBase: "./public",
    port: 8080,
    color: true,
    historyApiFallback: true,
    inline: true
  }
}