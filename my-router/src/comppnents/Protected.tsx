import React,{ ComponentType } from 'react';
import { Route,Redirect } from '../react-router-dom';
import { RouteComponentProps } from '../react-router-dom';
interface Props{
    path:string,
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}
export default (props:Props)=>{
    let { path,component:RouterComponent} = props
    return (
        <Route path={path} render={
            (renderProps:any)=>{
                return localStorage.getItem('login')?
                <RouterComponent {...renderProps} {...props}/>:<Redirect to={{pathname:'/login',state:{from:renderProps.location.pathname}}}/>
            }}/>
    )
}
