const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', //编译的入口文件
    module: {
        rules: [{
            test: /\.js$/, //匹配哪一些需要编译的文件
            exclude: /node_modules/, //要排除的文件夹
            loader: "babel-loader" // 编译器
        }]
    },
    plugins: [
        new HTMLPlugin({
        	template:'./template.html',//指定当前要动态生成的html的模板文件
        	filename:'index.html'  //生成后的文件名
        }) // 生成一个html页面，同时在webpack编译的时候。把我们所生成的entry都注入到这个html页面中,路径都是根据我们output配置的来走的。
    ]
}
