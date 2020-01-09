import React,{ PropsWithChildren,ReactNode } from 'react';
import { LocationDescritor } from '../history';
import RouterContext from './context';
type RedirectProps = PropsWithChildren<{
    to:LocationDescritor
}>
export default class extends React.Component<RedirectProps>{
    static contextType = RouterContext;
    render():ReactNode{
        //如果当前跳转的路径不存在，就直接跳转到to属性上的path路径上面去，此次的渲染为空，直接渲染默认路径即可
        this.context.history.push(this.props.to);
        return null
    }
}