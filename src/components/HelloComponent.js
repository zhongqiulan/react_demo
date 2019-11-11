// 导入react的主包
import React from 'react'
// props参数是父组件传递过来的值
function HelloComponent(props) {
  return <h1>这是函数形式的组件Hello, world{props.name} </h1>;
}
// 函数定义的组件也需要导出
export default HelloComponent