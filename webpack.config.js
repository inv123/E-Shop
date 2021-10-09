const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        'app': '/app.js',
        'style': '/style.css'
    },
    output: {
        filename: "[name].js",
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
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        })
    ], 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
              },
              {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
                type: 'asset'
              },
        ]
    }
}