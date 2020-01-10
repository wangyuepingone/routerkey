import React from 'react';
import { Link } from '../react-router-dom';
import { User } from '../types'
interface Props{}

interface State{
    users:Array<User>
}
export default class extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={users:[]}
    }
    componentDidMount(){
        let userStr = localStorage.getItem('users');
        let users = userStr?JSON.parse(userStr):[];
        this.setState({users})
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map((user:User,index:number)=>(
                        <li className="list-group-item" key={index}>
                            <Link to={{pathname:`/user/detail/?id=${user.id}`,state:user}}>{user.username}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}