import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import Profile from './components/Profile'
import MedHistory from './components/MedHistory'
import TodaysMeds from './components/TodaysMeds'

import OnBoarding from './components/OnBoarding'
import AddPatient from './components/AddPatient'
import AddMedication from './components/AddMedication'
import SetReminders from './components/SetReminders' 
import SetSchedule from './components/SetSchedule' 
import AddDescription from './components/AddDescription'

ReactDOM.render (
   <Router history={browserHistory}>
       <Route path="/" component={SignUp} />
       <Route path='/signin' component={SignIn} />

       <Route path='/profile' component={Profile}>
            <Route path='todaysmeds' component={TodaysMeds} />
            <Route path='medhistory' component={MedHistory} />
        </Route>
        
        <Route path='/new' component={OnBoarding}>
            <Route path='patient' component={AddPatient} />
            <Route path='medication' component={AddMedication} />
            <Route path='reminders' component={SetReminders} />
            <Route path='schedule' component={SetSchedule} />
            <Route path='description' component={AddDescription} />
        </Route>
     
   </Router>,

   document.getElementById('root')
)

        
        // <route path='profile/:onboardingid/patient' component={AddPatient}></route>
        // <route path='profile/:onboardingid/medication' component={AddMedication}></route>
        // <route path='profile/:onboardingid/reminders' component={SetReminders}></route>
        // <route path='profile/:onboardingid/schedule' component={SetSchedule}></route>
        // <route path='profile/:onboardingid/description' component={AddDescription}></route>