import React from 'react';
import ReactDOM from 'react-dom';
import Home from './comppnents/Home';
import User from './comppnents/User';
import { HashRouter as Router,Route,Link,Switch,Redirect } from './react-router-dom';
import Login from './comppnents/Login';
import Protected from './comppnents/Protected';
import Profile from './comppnents/Profile';
import 'bootstrap/dist/css/bootstrap.css';
let root:HTMLDivElement = document.getElementById('root') as HTMLDivElement;

 ReactDOM.render(<Router>
     <>
     <div className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <div className="navbar-brand">百颜皓翎</div>
            </div>
            <ul className="nav navbar-nav">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/user">User</Link></li>
                 <li><Link to="/profile">Profile</Link></li>
             </ul>
        </div>
     </div>
     <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/login" component={Login}/>
                    <Protected path="/profile" component={Profile}/>
                </Switch>
            </div>
        </div>
     </div>
     </>
 </Router>,root);