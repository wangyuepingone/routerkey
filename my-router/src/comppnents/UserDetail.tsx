import React from 'react';
import { Link,RouteComponentProps } from 'react-router-dom';
import { User } from '../types'
interface Params{
    id:string;
}
type Props=RouteComponentProps<Params>;
interface State{
    user:User
}
export default class extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={user:{}}
    }
    componentDidMount(){
        let user:User = this.props.location.state;
        if(!user){
            let userStr = localStorage.getItem('users');
            let users = userStr?JSON.parse(userStr):[];
            user = users.find((item:User)=>item.id === this.props.match.params.id);
        }
        this.setState({user})
    }
    render(){
        return (
            <div>
                <p>ID:{this.state.user.id}</p>
                <p>用户名:{this.state.user.username}</p>
                <p>邮箱:{this.state.user.email}</p>
            </div>
        )
    }
}