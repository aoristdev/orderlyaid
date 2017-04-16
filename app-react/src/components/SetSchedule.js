import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'  


class SetSchedule extends React.Component {
        constructor(props) {
            super(props)
                this.save = this.save.bind(this)
                this.state = {
                    // patient_name:'',
                    // name:'',
                    dosage: '',
                    count: '',
                    interval: '',
                    start_time: '',
                    end_time: '',
                }
    
}
    componentWillMount(){
        let savedData = store.get('savedData', [])
        if (this.props.params.index) {
            let savedData = savedData[this.props.params.index]
            this.setState({
                // patient_name: savedData.patient_name,
                // name: savedData.name
                    dosage: savedData.dosage,
                    count: savedData.count,
                    interval: savedData.interval,
                    start_time: savedData.start_time,
                    end_time: savedData.end_time
            })
        }
    }

    save() {
        let savedData = store.get('savedData', [])
            if ( ! this.props.params.index){
                savedData.push(this.state)
            }
            else {
                savedData[this.props.params] = this.state
            }
            store.set('savedData', savedData)
            browserHistory.push('/new/description')
    } 
  
   
render(){
  

    return<div>
    <h1>Set your schedule.</h1>
        <div className="form-group">
            <p className="fieldLabel">Dosage</p>
            <input type="text" className="form-control" value={this.state.dosage} onChange={(e) => this.setState({dosage:e.target.value})} id="dosagel" /><br/>

            <p className="fieldLabel">Count</p>
            <input type="text" className="form-control" value={this.state.count} onChange={(e) => this.setState({count:e.target.value})} id="count" /><br/>

            <p className="fieldLabel">Interval</p>
            <input type="text" className="form-control" value={this.state.interval} onChange={(e) => this.setState({interval:e.target.value})} id="interval" /><br/>
            
            <p className="fieldLabel">Start Time</p>
            <input type="text" className="form-control" value={this.state.start_time} onChange={(e) => this.setState({start_time:e.target.value})} id="startTime" />

            <p className="fieldLabel">End Time</p>
            <input type="text" className="form-control" value={this.state.end_time} onChange={(e) => this.setState({end_time:e.target.value})}id="endTime" />

            <button type="button" className="btn btn-default" onClick={this.save}>Add</button>
        </div>
    </div>
}
}
export default SetSchedule