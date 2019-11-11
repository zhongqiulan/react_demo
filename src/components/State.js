import React from 'react'

export default class State extends React.Component{	
	// 类的构造函数 如果在构造函数里面需要拿到父组件传递的参数必须要带形参props
	constructor(props){
		 super(props);

		// 状态就在构造函数里面去定义  this.state属于当前组件的状态 this在构造函数里面是无法使用
		console.log(this);
		this.state = {
			name:'张三',
			money:'1000000'
		}
		this.data = {
			name:'李四',
			money:'999999'
		}
	}
	// 设置默认的props，也可以用dufaultProps设置组件的默认属性
	componentWillMount(){
		//在渲染之前的回调函数去修改状态
		this.state.name = '王五';
		console.log(this.state);
	}

	render(){
		return <div>
		我是有状态的组件
		<h3>state名称 {this.state.name} </h3>
		<h3>state钱： {this.state.money} </h3>
		<h3>data名称 {this.data.name} </h3>
		<h3>data钱： {this.data.money} </h3>
		</div>
	}
	// 不管是状态还是属性发生变化都会触发的函数 这个函数默认react自己会执行默认会返回true 
	//如果你自己要写函数 必须要返回一个布尔值 false true
	shouldComponentUpdate(nextProps,nextState){
		// console.log(nextProps);
		// console.log(nextState);
		// 这个生命周期函数的意义就是用来判断状态或属性发生了更改后是否要渲染页面 如果返回false就不渲染返回true就渲染
		if(nextState === this.state.name){
			return false
		}else{
			return true
		}
		// 如果在这个生命周期函数里面返回false是不会刷新页面
		// 如果返回true才会刷新页面
		
	}
	componentDidMount(){
		// 如果直接赋值的方式修改状态不会触发声明周期的shouldComponentUpdate
		// this.state.name = '小明';
		this.setState({
			name:'小红'
		});
		console.log(this.state);
	}
}