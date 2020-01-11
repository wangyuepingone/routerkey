import React from 'react';
import RouterContext from './context';
import { Message } from './'

interface Props{
    when:boolean;
    message:Message
}
export default class extends React.Component<Props>{
    static contextType = RouterContext;
    render(){
        let { when,message } = this.props
        if(when){
            this.context.history.block(message);
        }else{
            this.context.history.block(null);
        }
        return null
    }
}