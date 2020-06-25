const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
let entry = path.resolve(__dirname, 'src', 'main.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
console.log(entry);
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: 'js/[name].[contenthash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'build'),
                    toType: 'dir',
                    // ignore: [{
                    //     glob: 'index.html',
                    //     matchBase: false
                    // }]

                }
            ]
        })
    ]
}