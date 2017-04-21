import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'


class AddMedication extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.state = {
            name: '',
            count: ''
        }
    }
    componentDidMount() {
        let x = store.set('savedData', { prescriptions: [] })
        //     // console.log(x.prescriptions)

    }

    save() {
        let savedData = store.get('savedData')
        // savedData = Object.assign(savedData.prescriptions, this.state)
        // let x = savedData.prescriptions = this.state
        savedData.name = this.state.name
        savedData.count = this.state.count
        store.set('savedData', savedData)
        browserHistory.push('/new/schedule')
        console.log(store.get('savedData'))
    }

    render() {

        return <div>
            <p className="stepTitle">Add a medication.</p>
            <div className="form-group">
                <p className="fieldLabel">Prescription Name</p>
                <input id="input" type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /><br />

                <p className="fieldLabel">Refill Quantity</p>
                <input id="input" type="text" className="form-control" value={this.state.count} onChange={(e) => this.setState({ count: e.target.value })} />
            </div>



            <button type="button" id="nextBtn" className="btn btn-default" onClick={this.save}>Next</button>

        </div>
    }
}

export default AddMedication