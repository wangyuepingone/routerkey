import React from 'react';
import { LocationDescritor } from '../history';
import RouterContext from './context'
//给LinkProps赋值两个类型一个是to的类型，一个是React.node类型
type LinkProps=React.PropsWithChildren<{
    to:LocationDescritor
}>
export default class extends React.Component<LinkProps>{
    static contextType = RouterContext
    render(){
        return (
            <a {...this.props} onClick={()=>this.context.history.push(this.props.to)}>{this.props.children}</a>
        )
    }
}