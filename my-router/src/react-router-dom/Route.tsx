import React from 'react';
import RouterContext from './context'
interface Props{
    path:string,
    component:React.JSXElementConstructor<any>
}

//Route的核心作用是判断当前组件path属性路径和浏览器路径的path是否一致
export default class extends React.Component<Props>{
    static contextType = RouterContext
    render(){
        let { path,component:RouterComponent} = this.props;
        let pathname = this.context.location.pathname;
        if(path === pathname){
            return <RouterComponent/>
        }
        return null
    }
}