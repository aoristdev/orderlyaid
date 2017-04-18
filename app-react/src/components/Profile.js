import React from 'react'
import { browserHistory } from 'react-router'
import './css/profile.css'

class Profile extends React.Component {
    constructor() {
        super()
        this.getProfile = this.getProfile.bind(this)

        this.state = {}
        this.goToTodaysMeds = this.goToTodaysMeds.bind(this)
        this.goToHistory = this.goToHistory.bind(this)
    }

    componentWillMount(){
        this.getProfile()
    }

    getProfile() {
        fetch('/users/profile?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({...res}))
            .then(res => console.log(this.state))
    }

    goToTodaysMeds() {
        browserHistory.push('/nav/profile/todaysmeds')
    }

    goToHistory() {
        browserHistory.push('/nav/profile/medhistory')
    }

    render() {

        return <div>
            <div className="container">
                <div className="userBio">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="https://unsplash.it/200/?blur" alt="..." className="userImg img-circle" />
                        </div>
                        <div className="userProfile">
                            <div className="col-sm-10">
                                <p className="userName">{this.state.patient_name}</p>
                                {/*<p className="userGender">{this.state.patient_name}</p>*/}
                                <p className="userAge">{this.state.patient_dob}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default nextMedPanel">
                            <div className="panel-body">
                                <p className="lead nextMed">Next Medications</p>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">3:00 pm</p>
                                            <p className="medDate">April 5 2017</p>
                                        </div>
                                        <div className="col-sm-7">
                                            <p className="medName">Medication Name</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="well">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">3:00 pm</p>
                                            <p className="medDate">April 5 2017</p>
                                        </div>
                                        <div className="col-sm-7">
                                            <p className="medName">Medication Name</p>
                                        </div>
                                    </div>
                                    {/*<div className="row medBtns">
                                       <button type="button" className="btn btn-link pull-right"><span className="glyphicon glyphicon-plus"></span> </button>
                                       <button type="button" className="btn btn-link pull-right"><span className="glyphicon glyphicon-pencil"></span> </button>
                                    </div>*/}
                                </div>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">3:00 pm</p>
                                            <p className="medDate">April 5 2017</p>
                                        </div>
                                        <div className="col-sm-7">
                                            <p className="medName">Medication Name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="tabs">
                            <ul className="nav nav-tabs">
                                <li role="presentation" id="tabname" onClick={this.goToTodaysMeds}><a>Current</a></li>
                                <li role="presentation" onClick={this.goToHistory}><a>History</a></li>
                            </ul>
                        </div>

                        <div>
                            {this.props.children}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    }
}
export default Profile

