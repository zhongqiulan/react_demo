import React,{Component} from 'react'
// 第一种创建组件的方式
// HelloWorld就是使用函数创建出来的一个组件 这个组件的名称必须以大写字母开头 
//使用帕斯卡命名法 所有首字母都大写
function HelloWorld(props) {
	// 组件必须有返回值 而且只能有一个根元素
	return <div>hello world函数创建的组件{props.name}</div>
}

export default HelloWorld;

// 第二种创建组件的方式  使用es6的类来创建

// class HelloWorld1 extends React.Component{
class HelloWorld1 extends Component{
	// 类创建的组件必须实现一个声明周期的render() 因为返回值必须要在函数里面
	render(){
		return <div>hello world1 类创建的组件{this.props.name}</div>		
	}
}
// 如果导出的不是默认组件 也需要带{}
export {HelloWorld1};