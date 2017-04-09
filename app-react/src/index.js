import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Layout from './components/Layout'
import Profile from './components/Profile'
import OnBoarding from './components/OnBoarding'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

ReactDOM.render (
   <Router history={browserHistory}>
       <Route path="/" component={Layout} >
           <IndexRoute component={Profile} />
           <Route path='signup' component={SignUp} />
           <Route path='signin' component={SignIn} />
           <Route path='new' component={OnBoarding} />
       </Route>
   </Router>,

   document.getElementById('root')
)