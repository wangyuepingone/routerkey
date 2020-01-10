import React from 'react';
import { Link,RouteComponentProps } from 'react-router-dom';
import { User } from '../types';
import qs from 'qs'
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
        console.log(this.props)
        // if(!user){
        //     let userStr = localStorage.getItem('users');
        //     let users = userStr?JSON.parse(userStr):[];
        //     user = users.find((item:User)=>item.id === this.props.match.params.id);
        // }

        if(!user){
            let params = this.props.location.search.slice(1);
            let paramsString = qs.parse(params);
            let userStr = localStorage.getItem('users');
            let users = userStr?JSON.parse(userStr):[];
            user = users.find((item:User)=>item.id ===paramsString.id )
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