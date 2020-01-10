import React from 'react';
import RouterContext from './context';
import { pathToRegexp,Key } from 'path-to-regexp'
import { RouteComponentProps,match } from './'
interface Props{
    path:string,
    exact?:boolean,
    component:React.JSXElementConstructor<any>
}

//Route的核心作用是判断当前组件path属性路径和浏览器路径的path是否一致
export default class extends React.Component<Props>{
    static contextType = RouterContext
    render(){
        let { path='/',component:RouterComponent,exact=false} = this.props;
        let pathname = this.context.location.pathname;
        let keys:Array<Key> = []
        let regexp = pathToRegexp(path,keys,{end:exact});
        let result:Array<string> = pathname.match(regexp);
        if(result){
            let [url,...values] = result;
            let paramsName = keys.map((item:Key)=>item.name);
            let memo:Record<string,any> ={};//Record类型是对象，对象的key是字符串，值是any
            //把result中所有的params参数全部遍历放到memo对象中去；
            let params = values.reduce((memo:Record<string,any>,value:string,index:number)=>{
                memo[paramsName[index]] = value;
                return memo
            },memo);
            type Parmas = typeof params
            let matchResult:match<Parmas> = {
                params,
                isExact:pathname === url,
                path,
                url
            };
            let props:RouteComponentProps<Parmas> ={
                location:this.context.location,
                history:this.context.history,
                match:matchResult
            }
            return <RouterComponent {...props}/>
        }
        return null
    }
}