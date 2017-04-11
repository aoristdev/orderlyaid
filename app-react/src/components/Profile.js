import React from 'react'
import { browserHistory } from 'react-router'

class Profile extends React.Component { 
    constructor(props){
        super(props)
         this.goToTodaysMeds = this.goToTodaysMeds.bind(this)
         this.goToHistory = this.goToHistory.bind(this)
         
        }
    goToTodaysMeds() {
    browserHistory.push('/profile/todaysmeds')
   }
    goToHistory() {
    browserHistory.push('/profile/medhistory')
   }
  
render(){

    return<div>
    <div className="container">
        <div className="userBio">
            <div className="row">
                <div className="col-sm-2">
                    <img src="https://unsplash.it/200/?blur" alt="..." className="userImg img-circle" />          
                </div>
                <div className="userProfile">
                    <div className="col-sm-10">
                        <h3>Betty Jones</h3>
                        <h4>Female</h4>
                        <h4>40 years old</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Next Medication</h3>

                        <div className="well">
                            <h4>Medication Name</h4>
                            <h4>3:00 pm</h4>
                        </div>

                        <div className="well">
                             <h4>Medication Name</h4>
                            <h4>6:00 pm</h4>
                        </div>

                        <div className="well">
                            <h4>Medication Name</h4>
                            <h4>9:00 pm</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-8">
                <div className="tabs">
                    <ul className="nav nav-tabs">
                        <li role="presentation" onClick={this.goToTodaysMeds}><a>Current</a></li>
                        <li role="presentation" onClick={this.goToHistory}><a>History</a></li>
                    </ul>
                </div>
                 <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                        {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
}
}
export default Profile

        //   {this.props.children} line 65