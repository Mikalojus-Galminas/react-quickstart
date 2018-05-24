const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

if (process.argv.indexOf('-production') !== -1) {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
} else {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
}

module.exports = {
    entry: {
        main: './widgets/src/main/index.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            components: path.join(__dirname, 'widgets/src/main/javascript/components'),
            pages: path.join(__dirname, 'widgets/src/main/javascript/pages'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './widgets/src/main/index.html',
            filename: './index.html',
        }),
    ],
};
