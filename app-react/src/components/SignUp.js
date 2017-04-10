import React from 'react'
import { browserHistory } from 'react-router'

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            mobile:'',
            photo:'',
        }
        this.signup = this.signup.bind(this)
        this.goToSignUp = this.goToSignUp.bind(this)
        this.goToSignIn = this.goToSignIn.bind(this)
 
    }
    signup() {
        console.log(this.state)
        var name = this.state.name;
        var email = this.state.email;
        var mobile = this.state.mobile;
        var photo = this.state.photo;
        var password = this.state.password;

        fetch('api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               user: {
                username: name,
                email: email,
                phone: mobile,
                avatar: photo,
                password: password,
               }
            })
     
             
        })  
            .then(response => response.json())
            .then(function(response){
                if (response.api_token) {
                sessionStorage.setItem('api_token', response.api_token)
                browserHistory.push('/patient')
            }
    })
    }

    goToSignIn() {
        browserHistory.push('/signin')
    }
    goToSignUp() {
        browserHistory.push('/')
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
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" onChange={(e)=>this.setState ({name:e.target.value})} />

                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" className="form-control" onChange={(e)=>this.setState({email:e.target.value})} />

                                            <label htmlFor="tel">Mobile Number</label>
                                            <input type="tel" className="form-control" onChange={(e)=>this.setState({mobile:e.target.value})} />

                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control"  onChange={(e)=>this.setState({password:e.target.value})}/>

                                           

                                            <button type="button" className="btn btn-default" onClick={this.signup}>Next</button>
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

// <label htmlFor="confirmEmail">Confirm Email Address</label>
// <input type="email" className="form-control" value={this.state.email} onChange={(e)=>this.setSate({email:e.target.value})} />

// <label htmlFor="confirmPassword">Confirm Password</label>
// <input type="password" className="form-control" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} /> 