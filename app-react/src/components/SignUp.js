import React from 'react'
import { browserHistory } from 'react-router'
import './css/signup.css'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            display_name: '',
            email: '',
            mobile: '',
            photo: '',
        }
        this.signup = this.signup.bind(this)
        this.goToSignUp = this.goToSignUp.bind(this)
        this.goToSignIn = this.goToSignIn.bind(this)
    }
    signup() {
        // console.log(this.state)
        var name = this.state.name;
        var email = this.state.email;
        var mobile = this.state.mobile;
        var photo = this.state.photo;
        var password = this.state.password;

        fetch('/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                display_name: name,
                email: email,
                phone: mobile,
                password: password,
            })

        })
            .then(response => response.json())
            .then(response => {
                if (response.token) {
                    sessionStorage.setItem('token', response.token)
                    browserHistory.push('/new/medication')
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
                                            <p className="fieldLabel">Name</p>
                                            <input id="input" type="text" className="form-control" onChange={(e) => this.setState({ display_name: e.target.value })} /> <br />

                                            <p className="fieldLabel">Email Address</p>
                                            <input id="input" type="email" className="form-control" onChange={(e) => this.setState({ email: e.target.value })} /><br />

                                            <p className="fieldLabel">Mobile Number</p>
                                            <input id="input" type="tel" className="form-control" onChange={(e) => this.setState({ mobile: e.target.value })} /><br />

                                            <p className="fieldLabel">Password</p>
                                            <input id="input" type="password" className="form-control" onChange={(e) => this.setState({ password: e.target.value })} /><br />

                                            <button type="button" id="nextBtn" className="btn btn-default" onClick={this.signup}>Next</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 line sidebar">
                                        <p className="sidebarTitle">Why you'll love us</p>
                                        <p className="whyPoint">Receive text messages when it's time to take your next prescription.</p>
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
export default SignUp;

// <label htmlFor="confirmEmail">Confirm Email Address</label>
// <input type="email" className="form-control" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />

// <label htmlFor="confirmPassword">Confirm Password</label>
// <input type="password" className="form-control" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
