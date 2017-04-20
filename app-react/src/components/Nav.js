import React from 'react'
import { browserHistory } from 'react-router'
import './css/nav.css'
import md5 from 'blueimp-md5'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.goToTodaysMeds = this.goToTodaysMeds.bind(this)
        this.goToHistory = this.goToHistory.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.addNew = this.addNew.bind(this)
    }
      componentWillMount(){
        this.getProfile()
        // console.log(this.props)
    }

    getProfile() {
        fetch('/users/profile?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({...res}))
            .then(res => console.log(this.state))
    }

    signedout() {
        sessionStorage.removeItem('token')
        browserHistory.push('/signin')
    }
        goToTodaysMeds() {
        browserHistory.push('/nav/profile/todaysmeds')
    }

    goToHistory() {
        browserHistory.push('/nav/profile/medhistory')
    }
    goToAllMeds() {
        browserHistory.push('/nav/profile/allmeds')
    }
    addNew() {
         browserHistory.push('/new/medication')
    }


    render() {
        return <div>
            <div className="mainNav container-fluid">
                <div className="mainNav">
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="logo">OrderlyAid</p>
                        </div>
                        <div className="col-sm-6">
                         <button id="singout" className="btn btn-default pull-right" onClick={this.signedout}>Log Out</button>

                        <button id="addNew" className="btn btn-default pull-right" onClick={this.addNew}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profileNav container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="tabs">
                            <ul className="nav nav-pills">
                                <li role="presentation" id="tabname" onClick={this.goToTodaysMeds}><a>Current</a></li>
                                <li role="presentation" onClick={this.goToHistory}><a>History</a></li>
                                <li role="presentation" onClick={this.goToAllMeds}><a>All</a></li>
                            </ul>
                        </div>
                    </div>
                      <div className="col-sm-2">
                        <p className="userName pull-right">{this.state.display_name}</p>
                    </div>
                      <div className="col-sm-2 pull-right">
                        <img src={'https://gravatar.com/avatar/' + md5(this.state.email)} className="userImg pull-right" alt="..." />
                    </div>
                </div>
            </div>

            
            {this.props.children}
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Nav