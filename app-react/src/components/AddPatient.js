import React from 'react'
import { browserHistory } from 'react-router'
import './css/addpatient.css'
import store from 'store'
import md5 from 'blueimp-md5'


class AddPatient extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)

        this.state = {
            patient_name: '',
            patient_dob: '',
            patient_avatar: ''
        }
    }

    save() {
        let savedData = store.get('savedData', {})
        savedData = Object.assign(savedData, this.state)
        store.set('savedData', savedData)

        browserHistory.push('/new/medication')
    }

    render() {
        return <div>
            <p className="stepTitle">Start by adding a patient.</p>
            <div className="form-group">
                <p className="fieldLabel">Name</p>
                <input id="input" type="text" className="form-control" value={this.state.patient_name} onChange={(e) => this.setState({ patient_name: e.target.value })} /><br />
               {/*} <img src={"https://gravatar.com/avatar/" + md5('davegregg@gmail.com')} alt="..."/>*/}

                <p className="fieldLabel">Photo URL</p>
                <div className="input-group">
                    <div className="input-group-addon"><span className="glyphicon glyphicon-camera"></span></div>
                    <input id="input" type="text" className="form-control" onChange={(e) => this.setState({ patient_avatar: e.target.value })} /><br />
                </div>
            </div>
            <button type="button" id="nextBtn" className="btn btn-default" onClick={this.save}>Next</button>
        </div>
    }
}

export default AddPatient