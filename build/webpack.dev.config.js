const webpackConfig=require('./webpack.common.config')//引入公共的的配置文件
const merge = require('webpack-merge')//需要安装 cnpm install webpack-merge -D 用来合并和覆盖相同配置项的插件
const webpack = require('webpack')//只需要引入 已经安装过了 不需要再安装了
const HtmlWebpackPlugin = require('html-webpack-plugin')//只需要引入 npm install html-webpack-plugin -D 指定html模板的插件 还可以用来压缩html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//cnpm install --save-dev mini-css-extract-plugin 只需要引入 已经安装过了 不需要再安装了
const devWebpackConfig = merge(webpackConfig,{//合并
    devtool:'cheap-module-eval-source-map',//开发环境下建议用这个配置 生产环境下用source-map 官方推荐
    plugins:[
        new webpack.NamedModulesPlugin(), // HMR在更新时在控制台显示正确的文件名
        new webpack.NoEmitOnErrorsPlugin(),//当编译出现错误的时候 来跳过输出阶段 可以确保资源输出不会包含错误
        new HtmlWebpackPlugin({
            template: './index.html' // 模板
        }),
        new MiniCssExtractPlugin({//抽离css文件的插件
            filename: "style.css",//文件命名
            chunkFilename:'static/styles/style.css'//打包完文件的存放地址
          }),
    ]
})

module.exports=devWebpackConfig//接口暴露