import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import store from 'store';
import './components/css/global.css';

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import Profile from './components/Profile'
import MedHistory from './components/MedHistory'
import AllMeds from './components/AllMeds'
import TodaysMeds from './components/TodaysMeds'

import Nav from './components/Nav'
import OnBoarding from './components/OnBoarding'
import AddPatient from './components/AddPatient'
import AddMedication from './components/AddMedication'

import SetSchedule from './components/SetSchedule' 
import AddDescription from './components/AddDescription'

ReactDOM.render (
   <Router history={browserHistory}>
       <Route path="/" component={SignUp} />
       <Route path='/signin' component={SignIn} />

       <Route path='/nav' component={Nav}>
            <Route path='profile' component={Profile}>        
                <Route path='todaysmeds' component={TodaysMeds} />
                <Route path='medhistory' component={MedHistory} />
                <Route path='allmeds' component={AllMeds} />
            </Route>
        </Route>
        
        <Route path='/new' component={OnBoarding}>
            <Route path='patient' component={AddPatient} />
            <Route path='medication' component={AddMedication} />
            <Route path='schedule' component={SetSchedule} />
            <Route path='description' component={AddDescription} />
        </Route>
     
   </Router>,

   document.getElementById('root')
)
