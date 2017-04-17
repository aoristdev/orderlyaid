import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'
import TimePicker from 'rc-time-picker';

class SetSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.state = {
            dosage: '',
            interval: '',
            start_time: '',
            end_time: '',
        }
    }

    save() {
        let savedData = store.get('savedData', {})
        savedData = Object.assign(savedData, this.state)
        store.set('savedData', savedData)

        browserHistory.push('/new/description')
    }


    render() {

        return <div>
            <p className="stepTitle">Set your schedule.</p>
            <div className="form-group">
                <p className="fieldLabel">How many?</p>
                <input id="input" type="text" className="form-control" value={this.state.dosage} onChange={(e) => this.setState({ dosage: e.target.value })} /><br />

                <p className="fieldLabel">How often?</p>
                <input id="input" type="text" className="form-control" value={this.state.interval} onChange={(e) => this.setState({ interval: e.target.value })} /><br />

                <p className="fieldLabel">Wake Time</p>
                <input id="input" type="text" className="form-control" value={this.state.start_time} onChange={(e) => this.setState({ start_time: e.target.value })} /><br />

                <p className="fieldLabel">Bed Time</p>
                <TimePicker value={this.state.end_time} onChange={(e) => this.setState({ end_time: e.target.value })} />
                <br/>

                <button type="button" id="nextBtn" className="btn btn-default" onClick={this.save}>Add</button>
            </div>
        </div>
    }
}
export default SetSchedule