import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'  


class AddMedication extends React.Component {
        constructor(props) {
            super(props)
                this.save = this.save.bind(this)
                this.state = {
                    // patient_name:'',
                    name:''
                    
                }
    
}
    componentWillMount(){
        let savedData = store.get('savedData', [])
        if (this.props.params) {
            let savedData = savedData[this.props.params]
            this.setState({
                // patient_name: savedData.patient_name,
                name: savedData.name
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
            browserHistory.push('/new/schedule')
    } 
  
render() {
// add med title
    return<div>
    <p>Add a medication.</p>
    <div className="form-group">
        <p className="fieldLabel">Medication Name</p>
        <input type="text" className="form-control"  value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} id="name" />
    </div>

   <button type="button" className="btn btn-default" onClick={this.save}>Add</button>

    </div>
    }
}

export default AddMedication