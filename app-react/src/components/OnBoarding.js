import React from 'react'
import { browserHistory } from 'react-router'
import AddDescription from './AddDescription'
import AddMedication from './AddMedication'
import AddPatient from './AddPatient'
import SetReminders from './SetReminders'
import SetSchedule from './SetSchedule'

class OnBoarding extends React.Component { 
render(){
    return<div>
     <div className="container">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-body">
                       <div className="row">
                           <div className="col-sm-8">
                           <AddMedication />
                            <AddDescription />
                            <AddPatient />
                            <SetReminders />
                            <SetSchedule />
                           
                            </div>
                            <div className="col-sm-4">
                                <h3>Steps to get started.</h3>
                                <h4>Add Patient</h4>
                                <h4>Add Medication</h4>
                                <h4>Set Reminders</h4>
                                <h4>Set Schedule</h4>
                                <h4>Choose Medication Profile</h4>
                                <h5>Color</h5>
                                <h5>Shape</h5>
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