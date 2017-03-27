var config = {
    entry: './jsx/app.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    }
}

module.exports = config;