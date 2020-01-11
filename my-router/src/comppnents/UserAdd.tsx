import React,{ RefObject } from 'react';
import { RouteComponentProps,Prompt } from '../react-router-dom';
import { Location } from '../history';
type Props = RouteComponentProps&{
    title?:string;
}

interface State{
    isBlocking:boolean;//是否阻止跳转到别的路径
}
export default class extends React.Component<Props,State>{
    username:RefObject<HTMLInputElement>;
    email:RefObject<HTMLInputElement>;
    constructor(props:Props){
        super(props);
        this.state={isBlocking:false};
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

    handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            isBlocking:this.email.current!.value.length>0 || this.username.current!.value.length>0
        })
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>

              <Prompt 
              when={this.state.isBlocking}
              message={(location:Location)=>`请问是否跳转到${location.pathname}路径？`}
              />
              <div className="form-group">
                  <label htmlFor="username">用户名</label>
                  <input  onChange={this.handleChange} type="username" className="form-control" ref={this.username}/>
              </div>

              <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input onChange={this.handleChange} type="email" className="form-control" ref={this.email}/>
              </div>

              <div className="form-group">
                  <input type="submit" className="btn btn-primary"/>
              </div>
          </form>
        )
    }
}