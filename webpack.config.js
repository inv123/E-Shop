const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "development",
    entry: {
        app: '/app.js',
        css: ['/style.css', '/css/animate.css', '/css/bootstrap.css', '/css/flex-slider.min.css']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        port: 9000,
        compress: true,
        historyApiFallback: true,
        hot: true,

        open: true,
        static: {
            directory: path.resolve(__dirname)
        }
    },
    devtool: 'eval-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [new HtmlWebpackPlugin({
        inject: true,
        template: 'index.html',
        favicon: './images/favicon.svg',

    })],
    module: {
        rules: [{
                test: /\.css$/,
                exclude: '/node_modules',
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|gif|svg)$/i,
                type: 'asset'
            }
        ]
    }
}