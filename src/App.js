import React from 'react'
// 导入自己创建的HelloWorld组件 注意必须带上相对的路径 不然会去node_module里面找
import HelloWorld from './components/HelloWorld'
// 如果导入的不是默认组件 需要带{}
import {HelloWorld1} from './components/HelloWorld'
import NoState from './components/NoState'
// 使用有状态的组件
import State from './components/State'
// 导入事件的组件
import Event from './components/Event'
const name = '张三';
function fun() {
	return <div>嘿嘿嘿</div>
}

// 业务逻辑代码在根组件里面写
// 定义App根组件 并导出
export default class App extends React.Component{
	// 根组件里面就来调用别组件
	render(){
		return <div>
				<Event></Event>
				<NoState time={new Date().toLocaleTimeString()}></NoState>
				<State></State>
		    <HelloWorld name="张三"></HelloWorld>
		    <HelloWorld1 name="李四"></HelloWorld1>
		    {/*
		      <HelloWorld1 name={1}></HelloWorld1>
		      <HelloWorld1 name={true}></HelloWorld1>
		      <HelloWorld1 name={['张三','李四']}></HelloWorld1>
		      <HelloWorld1 name={{name:'张三'}}></HelloWorld1>
		    */}    
		  	哈哈哈哈
		  	<h3>{name}</h3>
		  	<h2>{fun()}</h2>
		  	<h1>{Math.random()}</h1>
		  	<h1>{new Date().toLocaleString()}</h1>
		  	<img src="./src/a.png" alt=""/>
		  	<h1>嘻嘻嘻</h1>
		  	<h2>洗衣服</h2>
		  </div>
	}
}