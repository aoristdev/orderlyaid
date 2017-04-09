import React from 'react'
import { browserHistory } from 'react-router'

class AddMedication extends React.Component { 
    goToSetReminders() {
    browserHistory.push('/SetReminders')
   }
render() {

    return<div>
    <div className="form-group">
        <label htmlFor="name">Medication Name</label>
        <input type="text" class="form-control" id="name" />
        </div>

        <button type="submit" className="btn btn-default onClick={this.goToSetReminders}">Add</button>

    </div>
    }
}

export default AddMedication