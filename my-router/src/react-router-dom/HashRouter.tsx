import React from 'react';
import { Location } from '../history';
import RouterContext from './context';
import { ContextValue } from './' 
interface Props{

}
interface State{
    location:Location
}

//在这个组件定义Location路径对象，然后通过上下文的形式传递给下级组件
export default class extends React.Component<Props,State>{
    state= {
        location:{
            pathname:window.location.hash.slice(1)
        }
    }
    componentDidMount(){
        window.addEventListener('hashchange',(event:HashChangeEvent)=>{
            this.setState({
                ...this.state.location,
                pathname:window.location.hash.slice(1) || '/'
            })
        })
        window.location.hash = window.location.hash||'/'
    }

    render(){
        let contextValue:ContextValue = {
            location:this.state.location
        }
        return (
            <RouterContext.Provider value={contextValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}