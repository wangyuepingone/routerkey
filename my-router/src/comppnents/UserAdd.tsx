import React,{ RefObject } from 'react';
import { RouteComponentProps } from '../react-router-dom';
type Props = RouteComponentProps&{
    title?:string;
}

interface State{
    
}
export default class extends React.Component<Props,State>{
    username:RefObject<HTMLInputElement>;
    email:RefObject<HTMLInputElement>;
    constructor(props:Props){
        super(props);
        this.username = React.createRef();
        this.email = React.createRef()
    }
    handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        let username = this.username.current!.value;
        let email = this.email.current!.value;
        let userString = localStorage.getItem('users');
        let users = userString?JSON.parse(userString):[];
        users.push({id:Date.now(),username,email});
        localStorage.setItem('users',JSON.stringify(users));
        this.props.history.push('/user/list');
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="username">用户名</label>
                  <input type="username" className="form-control" ref={this.username}/>
              </div>

              <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input type="email" className="form-control" ref={this.email}/>
              </div>

              <div className="form-group">
                  <input type="submit" className="btn btn-primary"/>
              </div>
          </form>
        )
    }
}