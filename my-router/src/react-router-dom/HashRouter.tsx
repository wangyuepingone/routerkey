import React from 'react';
import { Location,LocationDescritor } from '../history';
import RouterContext from './context';
import { ContextValue } from './' 
interface Props{

}
interface State{
    location:Location
}

//在这个组件定义Location路径对象，然后通过上下文的形式传递给下级组件
export default class extends React.Component<Props,State>{
    locationState:any;
    state= {
        location:{
            pathname:window.location.hash.slice(1),
            state:null,
            search:window.location.hash.slice(1),
        }
    }
    componentDidMount(){
        window.addEventListener('hashchange',(event:HashChangeEvent)=>{
            this.setState({
                location:{
                        ...this.state.location,
                        pathname:window.location.hash.slice(1) || '/',
                        state:this.locationState,
                        search:window.location.hash.slice(1) || '/',
                }
            })
        })
        window.location.hash = window.location.hash||'/'
    }

    render(){
        let that = this;
        let history={
            push(to:LocationDescritor){
                if(typeof to==='object'){
                    let {pathname,state} = to;
                    that.locationState = state;
                    window.location.hash = pathname;
                    window.location.search=pathname
                }else{
                    that.locationState = null;
                    window.location.hash = to;
                    window.location.search=to
                }
            }
        };
        
        let contextValue:ContextValue = {
            location:this.state.location,
            history
        }
        return (
            <RouterContext.Provider value={contextValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}