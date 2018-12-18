const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
 
const config = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader'
        }]
    },
    devServer : {
        host: 'localhost',    // 服务器的IP地址，可以使用IP也可以使用localhost
        compress: true,       // 服务端压缩是否开启
        port: 8080,           // 端口
        hot: true,
        open: true,           // 自动打开浏览器
        overlay: {
            errors: true
        }
      },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config;
