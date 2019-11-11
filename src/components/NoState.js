import React from 'react'

export default class NoState extends React.Component{
	// 组件被初始化的时候会调用 渲染组件之间会调用 而且只会调用一次 一般会这里修改状态 发送网络请求
	componentWillMount(){
		console.log('组件渲染之前会调用的函数');
	}
	// 组件接收到新的props的时候会调用函数 只要父组件给你传递了新的值就会触发函数
	componentWillReceiveProps(){
		// console.log(this.props.time);
	}
	// 判断你当前的值更改之后是否要重新渲染页面
	shouldComponentUpdate(nextProps,nextState){
		if(this.props.time === nextProps){
			return false;
		}else{
			return true
		}
		// return false;
	}
	// 组件生命周期渲染的函数
	render(){
		return <div>我是无状态的组件{this.props.time}</div>
	}
	componentDidMount(){
		console.log('组件被渲染之后会调用的函数');
	}
}