// main.js是项目的主入口文件
// main.js就需要去渲染根组件
// 渲染的时候也需要导入React的基本包 
// 同时渲染的时候要需要根据渲染的内容 来导入渲染包 你是webapp就导入 react-dom 如果是原生APP就导入 react-native
import React from 'react'
import ReactDOM  from 'react-dom'

// 渲染App根组件 需要导入App跟组件 如果是自己定义的组件 导入的时候要带路径

import App from './App'

// 渲染App组件 
// 使用组件的使用是以标签的形式  render的第一个参数是要渲染的组件 第二个参数是组件渲染到的地方
// ReactDOM.render(<App />,document.getElementById('root'))

// setInterval(function () {
	//把渲染组件的代码放到了定时器里面不断执行
	ReactDOM.render(<App />,document.querySelector('#root'))
// }, 1000)

