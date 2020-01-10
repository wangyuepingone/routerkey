import React from 'react';
import { Route,Link } from '../react-router-dom';
import { LocationDescritor } from '../history';
interface Props{
    to:LocationDescritor;
    exact?:boolean;
    children?:React.ReactNode;
}
export default function(props:Props){
    let { to,exact,children } = props
    return (
        <Route path={to} exact={exact} children={
            (childrenProps:any)=>(
                <Link 
                to={to} 
                {...childrenProps}
                className={childrenProps.match?'active':''}
                >{children}</Link>
            )
        }></Route>
    )
}