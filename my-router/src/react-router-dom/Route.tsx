import React from 'react';
import RouterContext from './context';
import { pathToRegexp,Key } from 'path-to-regexp';
import { RouteComponentProps,match } from './';
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
        let search = this.context.location.search;
        let keys:Array<Key> = []
        let regexp = pathToRegexp(path,keys,{end:exact});
        let result:Array<string> = pathname.match(regexp);
        if(result){
            let [url,...values] = result;
            let ParamsName = keys.map((item:Key)=>item.name);
            let memo:Record<string,any> ={};
            let params=values.reduce((memo:Record<string,any>,value:string,index:number)=>{
                memo[ParamsName[index]]= value;
                return memo;
            },memo);
            type Params = typeof params;
            let matchResult:match<Params> = {
                params,
                isExact: pathname === url,
                path,
                url,
                search
            }
            let props:RouteComponentProps<Params> = {
                location:this.context.location,
                history:this.context.history,
                match:matchResult
            }
            return <RouterComponent {...props}/>
        }
        return null
    }
}