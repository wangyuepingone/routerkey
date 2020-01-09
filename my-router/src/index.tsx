import React from 'react';
import ReactDOM from 'react-dom';
import Home from './comppnents/Home';
import User from './comppnents/User';
import Profile from './comppnents/Profile';
import { HashRouter as Router,Route,Link,Switch } from './react-router-dom';
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
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </div>
        </div>
     </div>
     </>
 </Router>,root);