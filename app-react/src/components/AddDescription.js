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
            instructions: '',
            caution: '',
            notes: ''
        }
    }

    sendData() {
        let token = sessionStorage.getItem('token')
        let savedData = store.get('savedData', {})
        savedData.token = token

        fetch('/users/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(savedData)
        })
            .then(res => res.json())
            .then(res => {
                store.remove('savedData')
                browserHistory.push('/nav/profile')
            })
    }

    save() {
        let savedData = store.get('savedData', {})
        savedData = Object.assign(savedData, this.state)
        store.set('savedData', savedData)

        this.sendData()
    }

    render() {

        return <div>
            <p className="stepTitle">Add descriptions to your medication.</p>
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
                <textarea id="input" className="form-control" value={this.state.caution} onChange={(e) => this.setState({ caution: e.target.value })} rows="4"></textarea><br />
            </div>

            {/*<button type="button" className="btn btn-default" onClick={this.goToAddMedication}>Add More</button>*/}
            <button type="button" id="nextBtn" className="btn btn-default" onClick={this.sendData}>Next</button>


        </div>


    }
}

export default AddDescription 