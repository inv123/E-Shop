const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "production",
    entry: {
        app: '/app.js',
        css: ['/style.css',  '/css/flex-slider.min.css', '/css/themify-icons.css'],
        bootstrap: '/css/bootstrap.css',
        animate: '/css/animate.css',
        fontAwesome: '/css/font-awesome.css',
        niceSelect: ['/css/nice-select.css', '/css/niceselect.css'],
        slicknav: '/css/slicknav.min.css',
        
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
    performance: {
        maxAssetSize: 100000000,
        maxEntrypointSize: 400000000,
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