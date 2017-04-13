import React from 'react'
import { browserHistory } from 'react-router'

class OnBoarding extends React.Component {


    componentDidMount(){
        browserHistory.push('/new/patient')
    }
    render() {
        // console.log(this)

        return<div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                     {this.props.children}
                                    </div>
                                    <div className="col-sm-4">
                                        <h3>Steps to get started.</h3>
                                        <h4 className="active">Add Patient</h4>
                                        <h4>Add Medication</h4>
                                        <h4>Set Reminders</h4>
                                        <h4>Set Schedule</h4>
                                        <h4>Description</h4>
                                        <h5>Instructions</h5>
                                        <h5>Cautions</h5>
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