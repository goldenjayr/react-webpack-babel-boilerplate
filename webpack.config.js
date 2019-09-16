const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // this is the entry point where the bundling begins
    entry: './src/index.js',
    // this is the output path of the bundle
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    // this will run the loader to transpile javascript
    module: {
        rules: [
            {
                // looks for .js files
                test: /\.js$/,
                // skips the node_modules folder
                exclude: /node_mudules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    // points to the index.html template
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}