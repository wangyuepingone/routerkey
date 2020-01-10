import React,{ ComponentType } from 'react';
import { Route,RouteComponentProps } from './';

export default function<NavHeaderProps>(OldComponent:ComponentType<NavHeaderProps&RouteComponentProps>){
    return (props:NavHeaderProps)=>(
        <Route render={
            (routeProps:RouteComponentProps)=><OldComponent {...props} {...routeProps}/>
        }/>
    )
}