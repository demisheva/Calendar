/* eslint-disable no-undef */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './js/index.js'
    },
    mode: 'production',
    target: 'web',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [

        // eslint-disable-next-line new-cap
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};
