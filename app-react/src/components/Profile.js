import React from 'react'
import moment from 'moment'
import { browserHistory } from 'react-router'
import './css/profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
        this.goToTodaysMeds = this.goToTodaysMeds.bind(this)
        this.goToHistory = this.goToHistory.bind(this)
    }

    componentDidMount() {
         fetch('/rx/all?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({info: res}))
            .then(res => console.log(this.state.info))
    }

    goToTodaysMeds() {
        browserHistory.push('/nav/profile/todaysmeds')
    }

    goToHistory() {
        browserHistory.push('/nav/profile/medhistory')
    }

    render() {
        let info = this.state.info.map((medInfo, i) => {
                return <div className="well" key={i}>
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <p className="medTime">{moment(medInfo.last_taken).format('h:mma')}</p>
                                        {/*} <p className="medDate">{moment(medInfo.last_taken).format('dddd')}7</p>*/}
                                        {/*} <p className="medDate">{moment(medInfo.last_taken).format('M:D:YY')}7</p>*/}
                                        </div>
                                        <div className="col-sm-7">
                                            <p className="medName">{medInfo.name}</p>
                                        </div>
                                    </div>
                                </div>
        })
        return <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default nextMedPanel">
                            <div className="panel-body">
                                <p className="lead nextMed">Next Medications</p>
                                {info}
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

