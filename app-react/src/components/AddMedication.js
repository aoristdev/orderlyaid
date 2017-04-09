import React from 'react'

class AddMedication extends React.Component { 
render() {

    return<div>
    <div className="form-group">
        <label for="name">Medication Name</label>
        <input type="text" class="form-control" id="name" />
        </div>
    
    </div>
    }
}

export default AddMedication