import React from 'react'
import { browserHistory } from 'react-router'

class SignUp extends React.Component { 
    goToAddMedication() {
    location.href('/AddPatient')
   }
    goToSignIn() {
    browserHistory.push('/SignIn')
   }
    goToSignUp() {
    browserHistory.push('/SignUp')
   }
render(){   
    return<div>
    <div className="container">
        <div className="row">
       
            <div className="col-sm-8 col-sm-offset-2">
               <div className="pull-right">
                    <button type="button" className="btn btn-link pull-right onClick={this.goToSignUp}">Sign Up</button> 
                    <button type="button" className="btn btn-link pull-right onClick={this.goToSignIn}">Sign In</button> 
                </div>
                
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1>Manage all your medications in one place.</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"/>

                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" />

                                <label htmlFor="confirmEmail">Confirm Email Address</label>
                                <input type="email" className="form-control" id="confirmEmail" />

                                <label htmlFor="tel">Mobile Number</label>
                                <input type="tel" className="form-control" id="tel" />

                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" />

                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" />

                                <button type="submit" className="btn btn-default onClick={this.goToAddPatient}">Next</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <h3>Why you'll love us.</h3>
                            <h4>Recieve text messages when it's time to take your next perscription.</h4>
                            <h4>Add loved ones to recieve reminders to help you stay on track.</h4>
                            <h4>Get alerts when it's time for a refill.</h4>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}
}

export default SignUp;