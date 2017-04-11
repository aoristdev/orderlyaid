import React from 'react'
import { browserHistory } from 'react-router'



import './css/index.css'


class OnBoarding extends React.Component {
    constructor(props) {
        super(props)
        this.goToAddMedication = this.goToAddMedication.bind(this)
        this.state = {

        }
    }
    componentDidMount() {
        alert("I made it Maaaa!")
    }
    goToAddMedication() {
        // /post patient
    window.scroll(0, 2500)
    browserHistory.push('/new/medication')
    }    

// add constructor 

    render() {
        // console.log(this)

        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                     <h1>Start by adding a patient.</h1>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" />

                                            <label htmlFor="birthDate">Birth Date</label>
                                            <input type="text" className="form-control" id="birthDate" />

                                            <label className="sr-only" htmlFor="photoUrl">Photo</label>
                                            <div className="input-group">
                                                <div className="input-group-addon">URL</div>
                                                <input type="text" className="form-control" id="photoUrl" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-default" onClick={this.goToAddMedication}>Add</button>
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