import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';



import Profile from './components/Profile'
import OnBoarding from './components/OnBoarding'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import AddDescription from './components/AddDescription'
import SetReminders from './components/SetReminders' 
import SetSchedule from './components/SetSchedule' 
import AddMedication from './components/AddMedication'
import AddPatient from './components/AddPatient'
import MedHistory from './components/MedHistory'
import TodaysMeds from './components/TodaysMeds'




ReactDOM.render (
   <Router history={browserHistory}>
       <Route path="/" component={SignUp} />
       <Route path='/signin' component={SignIn} />
       <Route path='/profile' component={Profile} /> 
        <route path='profile/:profileid/todaysmeds' component={TodaysMeds}></route>
        <route path='profile/:profileid/medhistory' component={MedHistory}></route>
        
       <Route path='/new' component={OnBoarding} />
        <route path='profile/:onboardingid/patient' component={AddPatient}></route>
        <route path='profile/:onboardingid/medication' component={AddMedication}></route>
        <route path='profile/:onboardingid/reminders' component={SetReminders}></route>
        <route path='profile/:onboardingid/schedule' component={SetSchedule}></route>
        <route path='profile/:onboardingid/description' component={AddDescription}></route>
        
        

       
     
   </Router>,

   document.getElementById('root')
)

        
