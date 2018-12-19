const path = require('path');   //引入node的路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');

const HappyPack = require('happypack')//webpack默认在node上面是单进程 所以我们打包时间比较慢 我们可以用这个文件来配置多进程 提高效率 优化webpack  cnpm install happypack -D 来安装
const os = require('os');//配和happypack插件来用 cnpm install os -D 来安装
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })//获取cpu的数量

const webpackConfig = {
    target: "web",
    mode: '',
    entry:{
        main:'./src/main.js', //主入口文件
     },
    output: {
        filename:'static/js/[name].js',//出口文件名称
        path:path.resolve(__dirname,'./dist'),//出口路径
        chunkFilename:'static/js/[name].js',//分成块的打包地址会打包在static/js
        publicPath:'/'//公共路径
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
   resolve: {  
       //导入的时候不用写拓展名
       extensions: [' ', '.js', '.json', '.vue', '.scss', '.css'] //优先去找.js文件依赖 然后是.json 最后是.vue
   },
   watchOptions: {
       ignored: /node_modules/,
       aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
       poll: 1000  //每秒询问的文件变更的次数
   },
   devServer : {
       host: 'localhost',    // 服务器的IP地址，可以使用IP也可以使用localhost
       inline: true,
       compress: true,       // 服务端压缩是否开启
       port: 8080,           // 端口
       hot: true,
       open: true,           // 自动打开浏览器
       historyApiFallback: true,
       overlay: {
           errors: true
       }
         
      },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HappyPack({
            id: 'happy-babel-js',  //用id来标识 happypack处理那里类文件
            loaders: ['babel-loader?cacheDirectory=true'], 
            threadPool: happyThreadPool, //共享进程池
            //允许 HappyPack 输出日志
          verbose: true,
        })
    ] 
}

module.exports = webpackConfig;  //接口暴露
