const path = require('path');

module.exports = {
    entry: './app/app.ts',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'dist.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};