// App.js是项目的根组件文件 在App.js里面创建一个根组件

// 1. 引入React的基本包

import React from 'react'
// 如果要使用HelloComponent组件 需要导入进来
import HelloComponent from './components/HelloComponent'
//如果要使用HahaComponent组件 也要导入进来
import HahaComponent from './components/HahaComponent'
// 导入有状态的组件
import StateComponent from './components/StateComponent'
// 导入事件组件
import EventComponent from './components/EventComponent'
import TestComponent from './components/TestComponent'
// 定义一个变量 对象形式的变量 变量必须放到写JS代码的地方 在函数里面 或者全局定义变量
const user = {
	name: '张三',
	age: 18
}
// class是定义组件关键字
// App 组件的名称 必须是以大写字母开头
// React.Component 是组件的父类 （基本的组件）
// extends是继承
export default class App extends React.Component {
	// 组件必须要有返回值
	// render是渲染组件的函数 渲染的时候必须有返回值
	// 在jsx中 表达式使用单括号 和 ng vue 的表达式写法不太一样 
	// 返回值如果有多个标签要用一个容器包装起来
	render() {
		return <div>
			{Math.random()}
			
			{new Date().getHours()}
			<div>hello world!{1 + 1} <br />名称：{user.name} <br />年龄： {user.age}</div>
			
			<div>
				这是第二个div
				 </div>
			<h2>It is {new Date().toLocaleTimeString()}</h2>
			{/*这是注释 使用HelloComponent组件*/}
			<HelloComponent name="李四"></HelloComponent>
			<HahaComponent name="张三" age={18} user={{ name: '张三', age: 18 }}></HahaComponent>
			<StateComponent money={5000000000}></StateComponent>
			<EventComponent></EventComponent>
			<TestComponent  name="张三" user={{ name: '张三', age: 18 }}></TestComponent>
			
		</div>
	}
}

// 组件如果需要在别的地方使用 需要导入

// export default App