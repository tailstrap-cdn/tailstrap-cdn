const path = require('path');

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, './jquery.js'),
      path.resolve(__dirname, './popper.js'),
      path.resolve(__dirname, './bootstrap.js')
    ]
  },
  output: {
    filename: 'bundle.js', // Output JavaScript file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // No rules for handling other file types
    ],
  },
  resolve: {
    // Ensures Webpack only looks for JavaScript files
    extensions: ['.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development', // Change to 'production' for production builds
};
