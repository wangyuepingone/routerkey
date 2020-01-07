import React from 'react';
import ReactDOM from 'react-dom';
import Home from './comppnents/Home';
import User from './comppnents/User';
import Profile from './comppnents/Profile';
import { HashRouter as Router,Route } from './react-router-dom';
let root:HTMLDivElement = document.getElementById('root') as HTMLDivElement;

 ReactDOM.render(<Router>
     <>
        <Route path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/profile" component={Profile}/>
     </>
 </Router>,root);