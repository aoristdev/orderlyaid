import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'  

class AddDescription extends React.Component {
        constructor(props) {
            super(props)
                this.save = this.save.bind(this)
                this.sendData = this.sendData.bind(this)
                this.state = {
                    // patient_name:'',
                    // name:'',
                    // dosage: '',
                    // count: '',
                    // interval: '',
                    // start_time: '',
                    // end_time: '',
                    instructions: '',
                    caution: '',
                    notes: ''
                }
}
    componentWillMount(){
      let savedData = store.get('savedData', [])
        if (this.props.params.index) {
            let savedData = savedData[this.props.params.index]
            this.setState({
                // patient_name: savedData.patient_name,
                // name: savedData.name
                // dosage: savedData.dosage,
                // count: savedData.count,
                // interval: savedData.interval,
                // start_time: savedData.start_time,
                // end_time: savedData.end_time,
                instructions: savedData.instructions,
                caution: savedData.caution,
                notes: savedData.notes
            })
        }
    }
    sendData(patient_name, name, dosage, count, interval, start_time, end_time, instructions, caution, notes){
        fetch('/users/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                patient_name: patient_name,
                name: name,
                dosage: dosage,
                count: count, 
                interval: interval,
                start_time,
                end_time,
                instructions: instructions,
                caution: caution, 
                notes: notes
            })
        })
        .then (res => res.json())
        .then(res => {
            let sendData = this.state.sendData
                sendData.push(res)
                this.setState({sendData: patient_name, name, dosage, count, interval, start_time, end_time, instructions, caution, notes, message: 'Your medication has been added!'})

                browserHistory.push('/nav/profile')
        })
    }


    save() {
        let savedData = store.get('savedData', [])
            if ( ! this.props.params.index){
                savedData.push(this.state)
            }
            else {
                savedData[this.props.params.index] = this.state
            }
            store.set('savedData', savedData)
            browserHistory.push('/nav/profile')
    } 
    render() {

        return <div>
            <h1>Add descriptions to your medication.</h1>
            <div className="form-group">
                <h3>Instructions</h3>
                <div className="well">
                    <div className="radio">
                        <label>
                            <input type="radio" name="noFood" id="noFood" value={this.state.instructions} onChange={(e) => this.setState({instructions:e.target.value})} />
                            No food needed
                </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="withFood" id="withFood" value={this.state.instructions} onChange={(e) => this.setState({instructions:e.target.value})} />
                            Take with food
                </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="before" id="before" value={this.state.instructions} onChange={(e) => this.setState({instructions:e.target.value})} />
                            Take before eating
                </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="after" id="after" value={this.state.instructions} onChange={(e) => this.setState({instructions:e.target.value})} />
                            Take after eating
                </label>
                    </div>
                </div>

                <h3>Cautions</h3>
                <div className="well">
                    <p className="fieldLabel">Cautions</p>
                    <input type="text" className="form-control" value={this.state.caution} onChange={(e) => this.setState({caution:e.target.value})} placeholder="Cautions" /> <br/>

                    {/*<p className="fieldLabel">Additonal Notes</p>
                    <input type="text" className="form-control" value={this.state.notes} onChange={(e) => this.setState({notes:e.target.value})} placeholder="Notes" />*/}

                </div>
            </div>
            {/*<button type="button" className="btn btn-default" onClick={this.goToAddMedication}>Add More</button>*/}
            <button type="button" className="btn btn-default" onClick={this.save}>Next</button>


        </div>


    }
}

export default AddDescription 