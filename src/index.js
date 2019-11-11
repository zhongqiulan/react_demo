// 导入React的核心包
import React, { Component } from 'react';
// 导入React的DOM包
import ReactDOM from 'react-dom';
const name = '张三';
function fun() {
	return <div>嘿嘿嘿</div>
}
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// 渲染根组件  render是react的渲染函数 里面第一次参数是一个组件 也可以是一个标签 
//第二个参数是组件要渲染到的容器的选择器
ReactDOM.render(
  <div>
  	哈哈哈哈
  	<h3>{name}</h3>
  	<h2>{fun()}</h2>
  	<h1>{Math.random()}</h1>
  	<h1>{new Date().toLocaleString()}</h1>
  	<img src="./src/a.png" alt=""/>
  	<h1>嘻嘻嘻</h1>
  	<h2>洗衣服</h2>
  </div>,
  document.querySelector('#root')
);

// setInterval(tick, 1000);