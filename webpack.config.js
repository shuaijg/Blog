const path = require('path');   //引入node的路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //引入打包html文件
const webpack=require('webpack');

const HappyPack = require('happypack');//webpack默认在node上面是单进程 所以我们打包时间比较慢 我们可以用这个文件来配置多进程 提高效率 优化webpack  cnpm install happypack -D 来安装
const os = require('os');//配和happypack插件来用 cnpm install os -D 来安装
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });//获取cpu的数量

//注： __dirname是node.js的全局变量，它指向当前执行脚本所在的目录。

function resolve (dir) {
    return path.join(__dirname, '.', dir)
  }

const config = {
    mode: '',
    entry:{
        app: ["babel-polyfill", "./src/main.js"] //主入口文件
     },
    output: {
        filename:'static/js/[name].js',//出口文件名称
        path:path.resolve(__dirname,'./dist'),//出口路径
        chunkFilename:'static/js/[name].js',//分成块的打包地址会打包在static/js
        publicPath:'./'//公共路径
    },
    module: {
        //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
        rules: [{
            test: /\.vue$/,  // test 表示测试什么文件类型
            use: ['vue-loader'],
            exclude: path.resolve(__dirname, 'node_modules') // 排除文件
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.(png|jpg)$/,
            use: ['happypack/loader?id=image']
        },{
            test: /\.js$/,
            // 将对.js文件的处理转交给id为babel的HappyPack的实列
            use: ['happypack/loader?id=babel'],
            exclude: path.resolve(__dirname, 'node_modules') // 排除文件
        },{
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        }] 
   },
   resolve: {  
       //导入的时候不用写拓展名
       extensions: [' ', '.js', '.json', '.vue', '.scss', '.css'], //优先去找.js文件依赖 然后是.json 最后是.vue
       alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'jquery': 'jquery'
      }
   },
   watchOptions: {
       ignored: /node_modules/,
       aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
       poll: 1000  //每秒询问的文件变更的次数
   },
   devServer : {
       //contentBase: "./src", //本地服务器所加载的页面所在的目录
       contentBase: "./dist",
       host: 'localhost',    // 服务器的IP地址，可以使用IP也可以使用localhost
       inline: true,         //实时刷新
       compress: true,       // 服务端压缩是否开启
       port: 8088,           // 端口
       hot: true,
       open: true,           // 自动打开浏览器
       historyApiFallback: true, //不跳转
       //quiet: true //控制台中不输出打包的信息
       //contentBase: "./public",//本地服务器所加载的页面所在的目录
       overlay: {
           errors: true
       },
       proxy: {
        "/api": {
            target: 'http://localhost:3001', // 接口域名
            //ws: true,
            changeOrigin: true, // 是否跨域
            pathRewrite: {"^/api" : ""}//这里把/api换成""
         },
        }
   },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            _: "lodash",
            STORE: "store",
            uuid: "uuid"
          }),
        new HappyPack({
            // 用唯一的标识符id来代表当前的HappyPack 处理一类特定的文件
            id: 'babel',
            // 如何处理.js文件，用法和Loader配置是一样的
            loaders: ['babel-loader']
          }),
        new HappyPack({
            id: 'happy-babel-js',  //用id来标识 happypack处理那里类文件
            loaders: ['babel-loader?cacheDirectory=true'], 
            threadPool: happyThreadPool, //共享进程池
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        new HappyPack({
            id: 'image',
            loaders: [{
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: '[name].[ext]'
              }
            }]
        }),
    ],
    performance: {
        hints: false
      } 
}

module.exports = config;  //接口暴露
