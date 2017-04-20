import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'
import './css/addpatient.css'

class AddDescription extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.sendData = this.sendData.bind(this)
        this.goToAddMedication = this.goToAddMedication.bind(this)

        this.state = {
            prescriptions: [],
            instructions: '',
            caution: '',
            notes: ''
        }
    }
    // componentDidMount() {
        //  let x = store.set('savedData', {prescriptions:[]})
        // let x = store.get('savedData')
    //     console.log(x.name)
    // }

    sendData() {
        let token = sessionStorage.getItem('token')
        let savedData = store.get('savedData')
        //  let x = savedData.prescriptions_attributes = this.state
        // let prescriptions = this.state.prescriptions
        savedData.token = token
        savedData.prescriptions_attributes = [
            {
                name: savedData.name,
                instructions: this.state.instructions, 
                caution: this.state.caution,
                notes: this.state.notes,
                dosage: savedData.dosage,
                count: savedData.count,
                interval: savedData.interval,
                start_time: savedData.start_time,
                end_time: savedData.end_time
            }
        ]
        console.log(savedData)
        fetch('/users/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(savedData)
        })
            .then(res => res.json())
            .then(res => {
                store.remove('savedData')
                browserHistory.push('/nav/profile/todaysmeds')
            })
    }

    save() {
        let savedData = store.get('savedData', {})
        savedData = Object.assign(savedData, this.state)
        store.set('savedData', savedData)

        this.sendData()
    }
    goToAddMedication(){
        browserHistory.push('/nav/profile')
    }

    render() {

        return <div>
            <p className="stepTitle">Add instructions for your medication.</p>
            <div className="form-group">
                <p className="subTitle">Instructions</p>
                <div className="radio">
                    <p className="radioLabel">
                        <input type="radio" name="instructions" id="noFood" value="nofood" checked={this.state.instructions === 'nofood'} onClick={(e) => this.setState({ instructions: e.target.value })} />
                        No food needed
                        </p>
                </div>
                <div className="radio">
                    <p className="radioLabel">
                        <input type="radio" name="instructions" id="withFood" value="withfood" checked={this.state.instructions === 'withfood'} onClick={(e) => this.setState({ instructions: e.target.value })} />
                        Take with food
                        </p>
                </div>
                <div className="radio">
                    <p className="radioLabel">
                        <input type="radio" name="instructions" id="before" value="beforefood" checked={this.state.instructions === 'beforefood'} onClick={(e) => this.setState({ instructions: e.target.value })} />
                        Take before eating
                        </p>
                </div>
                <div className="radio">
                    <p className="radioLabel radio inline control-label">
                        <input type="radio" name="instructions" id="after" value="afterfood" checked={this.state.instructions === 'afterfood'} onClick={(e) => this.setState({ instructions: e.target.value })} />
                        Take after eating
                        </p>
                </div>

                <p className="subTitle cautions">Cautions</p>
                <textarea id="input" placeholder="Please add cautions as seen on prescription lable." className="form-control" value={this.state.caution} onChange={(e) => this.setState({ caution: e.target.value })} rows="4"></textarea><br />

                <p className="subTitle cautions">Notes</p>
                <textarea id="input" className="form-control" placeholder="Please add notes. 'Drink with juice to hide taste.'" value={this.state.notes} onChange={(e) => this.setState({ notes: e.target.value })} rows="4"></textarea><br />
            </div>

            <button type="button" id="addBtn" className="btn btn-default" onClick={this.goToAddMedication}>Add More</button>

            <button type="button" id="nextBtn" className="btn btn-default" onClick={this.sendData}>Next</button>


        </div>


    }
}

export default AddDescription 