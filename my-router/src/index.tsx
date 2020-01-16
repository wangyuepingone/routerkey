import React from 'react';
import ReactDOM from 'react-dom';
import Home from './comppnents/Home';
import User from './comppnents/User';
import { BrowserRouter as Router,Route,Switch,MenuLink } from './react-router-dom';
import Login from './comppnents/Login';
import Protected from './comppnents/Protected';
import Profile from './comppnents/Profile';
import NavHeader from './comppnents/NavHeader'
import 'bootstrap/dist/css/bootstrap.css';
import './menu.css';
let root:HTMLDivElement = document.getElementById('root') as HTMLDivElement;

 ReactDOM.render(<Router>
     <>
     <div className="navbar navbar-inverse">
        <div className="container-fluid">
            <NavHeader title="百颜皓翎"/>
            <ul className="nav navbar-nav">
                 <li><MenuLink to="/" exact={true}>Home</MenuLink></li>
                 <li><MenuLink to="/user">User</MenuLink></li>
                 <li><MenuLink to="/profile">Profile</MenuLink></li>
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