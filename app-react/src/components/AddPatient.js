import React from 'react'

class AddPatient extends React.Component { 
render(){

    return<div>
    <h1>Start by adding a patient.</h1>
        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" />

            <label for="birthDate">Birth Date</label>
            <input type="text" className="form-control" id="birthDate" />

            <label className="sr-only" for="photoUrl">Photo</label>
            <div className="input-group">
                <div className="input-group-addon">URL</div>
                <input type="text" className="form-control" id="photoUrl" />
            </div>
        </div>
    </div>
}
}
export default AddPatient 