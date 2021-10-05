const path = require('path');

module.exports = {
    mode: "development",
    entry: "./app.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        inline: true,
        watchContentBase: true,
        historyApiFallback: {
            index: '/',
            disableDotRule: true,
        },
    },
    devtool: 'eval-source-map',
    
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}