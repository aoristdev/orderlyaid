import React from 'react'
import { browserHistory } from 'react-router'
import './css/signup.css'  
class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }

        this.signIn = this.signIn.bind(this)
        this.signedin = this.signedin.bind(this)
    }
    signIn() {

        fetch('/users/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    token: this.state.token 
            })
        })
        .then(response => response.json())
        .then(response => {
            if (response.token) {
                sessionStorage.setItem('token', response.token)
                sessionStorage.setItem('user_id', JSON.stringify(response.user.id))
                browserHistory.push('/profile')
            }
            else {
                alert('Entery not found. Please try again!')
            }
        })
    }
        signedin(){
           return sessionStorage.setItem('token')
        }

    goToSignUp() {
        browserHistory.push('/')
    }

    goToProfile(){
        browserHistory.push('/profile')
    }

    render() {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="toggleBtns pull-right">
                            <button type="button" id="toggle" className="btn btn-link pull-right" onClick={this.goToSignUp}>Sign Up</button>
                            <button type="button" id="toggle" className="btn btn-link pull-right" onClick={this.goToSignIn}>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="signupCard panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-1">
                                        <p className="signupTitle">Manage your medications in one place.</p>
                                        <div className="form-group">

                                            <p className="fieldLabel">Email Address</p>
                                            <input id="input" type="email" className="form-control" onChange={(e)=>this.setState ({email:e.target.value})} id="email" /><br/>

                                            <p className="fieldLabel">Password</p>
                                            <input id="input" type="password" className="form-control" onChange={(e)=>this.setState ({password:e.target.value})} id="password" /><br/>

                                            <button type="button" className="btn btn-default" onClick={this.signIn}>Next</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 line sidebar">
                                        <p className="sidebarTitle">Why you'll love us.</p>
                                        <p className="whyPoint">Recieve text messages when it's time to take your next perscription.</p>
                                        <p className="whyPoint">Add loved ones to recieve reminders to help you stay on track.</p>
                                        <p className="whyPoint">Get alerts when it's time for a refill.</p>
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
export default SignIn;
