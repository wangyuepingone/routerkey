import React from 'react';
import { RouteComponentProps,Link,Route } from '../react-router-dom';
import UserList from '../comppnents/UserList';
import UserAdd from '../comppnents/UserAdd';
import UserDetail from '../comppnents/UserDetail';

type Props = RouteComponentProps&{

}
export default class Home extends React.Component<Props>{
    render(){
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-stack">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">添加用户</Link></li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <Route path="/user/list" component={UserList}/>
                    <Route path="/user/add" component={UserAdd}/>
                    <Route path="/user/detail/:id" component={UserDetail} exact/>
                </div>
            </div>
        )
    }
}