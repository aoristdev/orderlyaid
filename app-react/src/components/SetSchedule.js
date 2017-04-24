import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'
import moment from 'moment'




class SetSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.state = {
            time_take: '',
            dosage: '',
            interval: '',
            start_time: '',
            end_time: '',
        }
    }
   

    save() {
        let savedData = store.get('savedData')
        console.log(savedData)
        let x = savedData.prescriptions = this.state
        savedData.time_taken = this.state.time_taken
        savedData.dosage = this.state.dosage
        savedData.start_time = this.state.start_time
        savedData.end_time = this.state.end_time
        savedData.interval = this.state.interval
        store.set('savedData', savedData)
        // savedData = Object.assign(savedData, this.state)
        // store.set('savedData', savedData)
        console.log("End of SetSachedule save")
        console.log(store.get('savedData'))
        browserHistory.push('/new/description')
    }

    render() {

        return <div>
            <p className="stepTitle">Set your schedule.</p>
            <div className="form-group">
                <p className="fieldLabel" >What time did you last take this medication?</p>
                <input id="input" type="text" className="form-control" placeholder="00:00" value={this.state.time_taken} onChange={(e) => this.setState({ time_taken: e.target.value })} /><br/>

                <p className="fieldLabel">How many pills do you take each time??</p>
                <input id="input" placeholder="ie: 2" type="text" className="form-control" value={this.state.dosage} onChange={(e) => this.setState({ dosage: e.target.value })} /><br />


                <p className="fieldLabel">How many hours between each dose?</p>
                 <input id="input" type="text" style={{width:'100%'}} placeholder="00:00" className="form-control" value={this.state.interval} onChange={(e) => this.setState({ interval: e.target.value })} /><br />

                <p className="fieldLabel">What time do you wake up?</p>
                <input id="input" className="form-control" type="text" style={{width:'100%'}} placeholder="00:00" value={this.state.start_time} onChange={(e) => this.setState({ start_time: e.target.value })} /><br />

                <p className="fieldLabel">What time do you go to bed?</p>
                 <input id="input" className="form-control" type="text" style={{width:'100%'}} placeholder="00:00" value={this.state.end_time} onChange={(e) => this.setState({ end_time: e.target.value })} /><br />

                <button type="button" id="nextBtn" className="btn btn-default" onClick={this.save}>Add</button>
            </div>

        </div>
    }
}
export default SetSchedule