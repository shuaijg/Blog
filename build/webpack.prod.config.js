const webpackConfig=require('./webpack.common.config')//只需要引入 已经安装过了 不需要再安装了
const merge = require('webpack-merge')//只需要引入 已经安装过了 不需要再安装了
const MiniCssExtractPlugin=require('mini-css-extract-plugin')//只需要引入 已经安装过了 不需要再安装了
const HtmlWebpackPlugin = require('html-webpack-plugin')//只需要引入 已经安装过了 不需要再安装了
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')//用来压缩css文件的 cnpm install optimize-css-assets-webpack-plugin -D

const proWebpackConfig = merge(webpackConfig,{
    devtool:'source-map',//开发环境下用cheap-module-eval-source-map,生产环境用source-map
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {//html文件的压缩规则
              removeComments: true,//去除注释
              collapseWhitespace: true,//去除空格
              removeAttributeQuotes: true//删除引号，删除不需要引号的值。
            },
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename:'static/styles/style.css',
        }),
        new OptimizeCSSPlugin()//压缩css
    ]

})

if(process.env.npm_config_report){//可视化查看文件打包的依赖  
    console.log(process.env.npm_config_report)
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    proWebpackConfig.plugins.push(new BundleAnalyzerPlugin())

}
module.exports = proWebpackConfig//接口暴露