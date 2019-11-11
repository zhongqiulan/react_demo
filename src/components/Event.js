import React from 'react'
// 全局函数
function handleClick(e) {
	// react的事件默认是不阻止默认行为 需要手动阻止
    e.preventDefault();
    console.log('The link was clicked.');   
 }
export default class Event extends React.Component{
	constructor(){
		super();
		this.state = {
			num:1
		}
		this.handleClick = this.handleClick.bind(this);
	}
	// 组件内部的函数
	handleClick(e){
		// react事件里面默认是拿不到this
		console.log(this);
		console.log('点击了按钮');
		this.setState({
			num:this.state.num+1
		})
	}

	render(){
		return <div>
			<input type="text" value={this.state.num}/>
			{/*使用全局函数直接写函数名*/}
			<a href="https://www.baidu.com" onClick={handleClick}>按钮</a>
			{/*使用组件内部的函数要带this.函数名*/}
			<button onClick={this.handleClick}>按钮1</button>
			<button onClick={(e) => this.handleClick(e)}>按钮2</button>
			<button onClick={this.handleClick.bind(this)}>按钮3</button>
		</div>
	}
}