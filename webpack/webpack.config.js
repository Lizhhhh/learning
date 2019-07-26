module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js'
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist',
        port: 8888,
        inline: true,
        historyApiFallback: true
        // contentBase: '/dist',
        // port: '8888',
        // inline: true,
        // historyApiFallback: true
    }
}