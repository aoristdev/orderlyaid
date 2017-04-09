import React from 'react'
import { browserHistory } from 'react-router'

class SignUp extends React.Component { 
render(){   
    return<div>
    <div className="container">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-body">
                       <div className="row">
                           <div className="col-sm-8">
                               <h1>Manage all your medications in one place.</h1>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name"/>

                                    <label for="email">Email Address</label>
                                    <input type="email" className="form-control" id="email" />

                                    <label for="confirmEmail">Confirm Email Address</label>
                                    <input type="email" className="form-control" id="confirmEmail" />

                                    <label for="tel">Mobile Number</label>
                                    <input type="tel" className="form-control" id="tel" />

                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" />

                                    <label for="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" />

                                    <button type="submit" className="btn btn-default">Next</button>
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