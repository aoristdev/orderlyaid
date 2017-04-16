import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'

class AddPatient extends React.Component {
        constructor(props) {
            super(props)
                this.save = this.save.bind(this)
                this.state = {
                    patient_name:''
                }
    
}
    componentWillMount(){
        let savedData = store.get('savedData', [])
        if (this.props.parama) {
            let savedData = savedData[this.props.params]
            this.setState({
                patient_name: savedData.patient_name
            })
        }
    }

    save() {
        let savedData = store.get('savedData', [])
            if ( ! this.props.params){
                savedData.push(this.state)
            }
            else {
                savedData[this.props.params] = this.state
            }
            store.set('savedData', savedData)
            browserHistory.push('/new/medication')
    }
    
    render() {
        return<div>
        <h1>Start by adding a patient.</h1>
            <div className="form-group">
                <p className="fieldLabel">Name</p>
                <input type="text" className="form-control" value={this.state.patient_name} onChange={(e) => this.setState({patient_name:e.target.value})}id="name" /><br/>

                <p className="fieldLabel">Birth Date</p>
                <input type="text" className="form-control" onChange={(e) => this.setState({patient_name:e.target.value})} id="birthDate" /><br/>

                <p className="fieldLabel">Photo</p>
                <div className="input-group">
                    <div className="input-group-addon">URL</div>
                    <input type="text" className="form-control" onChange={(e) => this.setState({patient_name:e.target.value})} id="photoUrl" /><br/>
                </div>
            </div>
        <button type="button" className="btn btn-default" onClick={this.save}>Add</button>
        </div>                                    
    }
}

export default AddPatient