import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import 'rc-time-picker/assets/index.css'
import './css/addpatient.css'
import TimePicker from 'rc-time-picker'
import moment from 'moment'

class SetSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.state = {
            time_take:'',
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
                <p className="fieldLabel">Last time you took this medication</p>
                <input id="input" type="text" className="form-control" value={this.state.interval} onChange={(e) => this.setState.time({ time_taken: moment(e.target.value,'X')})} /><br />

                <p className="fieldLabel">How many?</p>
                <input id="input" type="text" className="form-control" value={this.state.dosage} onChange={(e) => this.setState({ dosage: e.target.value })} /><br />

               {/*} <select className="selectpicker">
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                </select>*/}

                <p className="fieldLabel">How often?</p>
                <input id="input" type="text" className="form-control" value={this.state.interval} onChange={(e) => this.setState({ interval: e.target.value })} /><br />

                <p className="fieldLabel">Wake Time</p>
                <input id="input" type="text" className="form-control" value={this.state.start_time} onChange={(e) => this.setState({ start_time: e.target.value })} /><br />

                <p className="fieldLabel">Bed Time</p>
                <TimePicker showSecond={false} onChange={(time) => {if (time) {this.setState({end_time: time.format('HH:mm')})}}} />
                <br/>
       
               {/*} <div cclassName='input-group date' id='datetimepicker3'>
                    <input type='text' className="form-control" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-time"></span>
                    </span>
                </div>*/}
       
     

                <button type="button" id="nextBtn" className="btn btn-default" onClick={this.save}>Add</button>
            </div>

        </div>
    }
}
export default SetSchedule