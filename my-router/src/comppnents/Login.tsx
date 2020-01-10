import React from 'react';
import { RouteComponentProps } from '../react-router-dom';
type Props = RouteComponentProps
export default class extends React.Component<Props>{
    handleLogin=()=>{
        localStorage.setItem('login','true');
        if(this.props.location.state && this.props.location.state.form){
            this.props.history.push(this.props.location.state.form);
        }
    }
    render(){
        return (
            <button
                onClick={this.handleLogin}
                className="btn btn-primary"
            >登录</button>
        )
    }
}