// 导入React的核心包
import React, { Component } from 'react';
// 导入React的DOM包
import ReactDOM from 'react-dom';
// 导入根组件
import App from './App'
// 每隔1秒去执行渲染
// setInterval(function () {
	// 主入口文件只负责渲染根组件
	ReactDOM.render(
	  <App/>,
	  document.querySelector('#root')
	);
// }, 1000)
	

