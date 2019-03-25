module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          
          },       
          {
            test: /\.(js|jsx)/,
            use: 'babel-loader',
          },  
      ],
    }
};