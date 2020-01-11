import React from 'react';
import { Location,LocationDescritor,History } from '../history';
import RouterContext from './context';
import { ContextValue,Message } from './';
interface Props{

}
interface State{
    location:Location
}

declare global{
    interface Window{
        onpushstate:(state:any,pathname:string) => void;
    }
}

//在这个组件定义Location路径对象，然后通过上下文的形式传递给下级组件
export default class extends React.Component<Props,State>{
    locationState:any;
    state= {
        location:{
            pathname:"/",
            state:null
        }
    }
    componentDidMount(){
        window.onpopstate = (event:PopStateEvent)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:document.location.pathname,
                    state:event.state
                }
            })
        };

        window.onpushstate = (state:any,pathname:string)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname,
                    state
                }
            })
        }
    }

    render(){
        let history:History={
            push(to:LocationDescritor){
                if(history.message){
                    let allow =window.confirm(history.message(typeof to === 'object' ? to as Location :{pathname:to}));
                    if(!allow) return;
                }
                if(typeof to === 'object'){
                    let {pathname,state} = to;
                    window.history.pushState(state,'',pathname);
                }else{
                    window.history.pushState(null,'',to);
                }
            },
            message:null,
            block(message:Message|null){
                history.message =message;
            }
        };
        
        let contextValue:ContextValue = {
            location:this.state.location,
            history
        };
        return (
            <RouterContext.Provider value={contextValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}