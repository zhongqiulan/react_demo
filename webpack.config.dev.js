// 引入path的模块
const path = require('path');
// 引入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',//指定加载器
                exclude: /node_modules/   //排除文件
            }
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
　　　　 　　template: path.resolve(__dirname, './template.html'),//模板文件的路径
　　　　　　 filename:'index.html' //输出的文件路径 默认输出到根目录
　　　　 })
　　 ]
}