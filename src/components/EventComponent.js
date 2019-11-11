// 导入react的主包
import React from 'react'
// 组件外的函数定义方式 普通的JS函数
 // function handleClick(e) {
 //    e.preventDefault();
 //    console.log('The link was clicked.');
 //    console.log(this);
 //  }
// 创建事件组件
export default class EventComponent extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	// 组件内部定义函数的方式 不要带functiong关键字
	handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    console.log(this);
  }
	render(){
		return <div>
			<button onClick={this.handleClick}>点击我</button>
			<a href="https://www.baidu.com" onClick={this.handleClick}>跳转到百度</a>
		</div>
	}
}