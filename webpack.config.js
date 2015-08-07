module.exports = {
    entry: './app/client/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/,
            },
        ],
    },
};
