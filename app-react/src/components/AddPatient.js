import React from 'react'
import { browserHistory } from 'react-router'

class AddPatient extends React.Component {
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


    render() {
        return<div>
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
        </div>                                    
    }
}

export default AddPatient