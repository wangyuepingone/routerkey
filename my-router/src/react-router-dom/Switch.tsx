import React,{ ReactElement} from 'react';
import RouterContext from './context';
import { pathToRegexp,Key } from 'path-to-regexp'
interface Props{
    children:Array<ReactElement>
}

export default class extends React.Component<Props>{
    static contextType = RouterContext
    render(){
        //取到switch的children，然后一一匹配他们的path属性，如果其中有一个属性匹配到了，那么就直接返回结果
        if(this.props.children){
            let pathname  = this.context.location.pathname;
            for(let i=0;i<this.props.children.length;i++){
                let child:ReactElement = this.props.children[i];
                let { exact=false, path="/", component:RoutetComponent} = child.props;
                let keys:Array<Key>=[];
                let regexp = pathToRegexp(path,keys,{end:exact});
                let result = pathname.match(regexp);
                if(result){
                    return child
                }
            }
        }
        return null
    }
}