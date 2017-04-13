import React from 'react'
import { browserHistory } from 'react-router'

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
                        <div className="pull-right">
                            <button type="button" className="btn btn-link pull-right" onClick={this.goToSignUp}>Sign Up</button>
                            <button type="button" className="btn btn-link pull-right" onClick={this.goToSignIn}>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">

                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h1>Manage all your medications in one place.</h1>
                                        <div className="form-group">

                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" className="form-control" onChange={(e)=>this.setState ({email:e.target.value})} id="email" />

                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" onChange={(e)=>this.setState ({password:e.target.value})} id="password" />

                                            <button type="button" className="btn btn-default" onClick={this.signIn}>Next</button>
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
export default SignIn;
