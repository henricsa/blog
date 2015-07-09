module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
