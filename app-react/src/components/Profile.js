import React from 'react'
import { browserHistory } from 'react-router'
import './css/profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.goToTodaysMeds = this.goToTodaysMeds.bind(this)
        this.goToHistory = this.goToHistory.bind(this)
        this.getNextMeds = this.getNextMeds.bind(this)
    }

    componentWillMount() {
        this.getNextMeds()
        // console.log(this.props)
    }

    getNextMeds() {
        fetch('/users/profile?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({ ...res }))
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
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default nextMedPanel">
                            <div className="panel-body">
                                <p className="lead nextMed">Next Medications</p>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">{this.state.start_time}</p>
                                            <p className="medDate">{this.state.start_time}7</p>
                                        </div>
                                        <div className="col-sm-7">
                                            <p className="medName">Medication Name</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="well">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">{this.state.start_time}</p>
                                            <p className="medDate">{this.state.end_time}</p>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        {this.props.children}
                    </div>

                </div>
            </div>
        </div>
    }
}
export default Profile

