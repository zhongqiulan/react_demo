import React,{Component} from 'react'

export default class HahaComponent extends Component{
	render(){
		return <div>这是类的形式的组件推荐使用类的方式 父组件传来的名字：{this.props.name} <br/>
		年龄：{this.props.user.age}
		</div>
	}
}