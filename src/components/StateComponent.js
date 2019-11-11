import React from 'react'

export default class StateComponent extends React.Component{
	constructor(props){
		//super是必须要调用 用来实例父类
		super(props)
		//创建自己的状态
		this.state = {
			money:'100000000'
		}
	}
	render(){
		return <div>
			<h1>我爸爸给我的钱{this.props.money} </h1>
			<h2>我自己赚的钱{this.state.money}</h2>
		</div>
	}
}