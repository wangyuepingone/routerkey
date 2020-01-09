import React from 'react';
import RouterContext from './context';
import { pathToRegexp,Key } from 'path-to-regexp'
interface Props{
    path:string,
    exact?:boolean,
    component:React.JSXElementConstructor<any>
}

//Route的核心作用是判断当前组件path属性路径和浏览器路径的path是否一致
export default class extends React.Component<Props>{
    static contextType = RouterContext
    render(){
        console.log(window.location)
        let { path='/',component:RouterComponent,exact=false} = this.props;
        let pathname = this.context.location.pathname;
        let paramsName:Array<Key> = []
        let regexp = pathToRegexp(path,paramsName,{end:exact});
        let result = pathname.match(regexp);
        let routerProps = {
            location:this.context.location
        }
        if(result){
            return <RouterComponent {...routerProps}/>
        }
        return null
    }
}