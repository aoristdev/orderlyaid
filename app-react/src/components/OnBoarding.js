import React from 'react'
import { browserHistory } from 'react-router'
import './css/onboarding.css'

class OnBoarding extends React.Component {
    render() {
        // console.log(this)

        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="onBoardingCard panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-1">
                                        {this.props.children}
                                    </div>
                                    
                                    <div className="col-sm-4 sidebar line">
                                        <p className="sidebarTitle">Steps to get started</p>
                                        <p className={location.pathname === '/new/patient' ? "active sidebarStep" : "sidebarStep"}>Add Patient</p>
                                        <p className={location.pathname === '/new/medication' ? "active sidebarStep" : "sidebarStep"}>Add Medication</p>
                                        <p className={location.pathname === '/new/schedule' ? "active sidebarStep" : "sidebarStep"}>Set Schedule</p>
                                         <p className={location.pathname === '/new/description' ? "active sidebarStep" : "sidebarStep"}>Description</p>
                                        {/*// <p className="sidebarStep">Instructions</p>
                                        // <p className="sidebarStep">Cautions</p>*/}
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
export default OnBoarding

//   {this.props.children} line 16
// needs constructor