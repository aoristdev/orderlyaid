import React from 'react'
import './css/todaysmeds.css'

class CurrentMed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prescriptions: ''
        }
    }
    componentDidMount() {
         fetch('/reminders/state?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({ info: res }))
            .then(res => console.log(this.state.info))
        console.log(this.props)
    }

    render() {
        return <div onClick={this.props.onClick} className={this.props.currentMed === this.props.index ? 'well currentMed active' : 'well currentMed'}>
            <a name={'currentMed' + this.props.index}></a>
            <p className="medicationName">{this.props.name}</p>
            <p className="dosage">{this.props.dosage} Capsules</p>
            <a id="listItem" className="list-group-item">
                <p className="curentMedHeading">Instructions</p>
                <p className="currentMedInfo">{this.props.instructions}</p>
            </a>
            <a href="#" className="list-group-item">
                <p className="curentMedHeading">Cautions</p>
                <p className="currentMedInfo">{this.props.caution}</p>
            </a>

            <a href="#" className="list-group-item">
                <p className="curentMedHeading">Notes</p>
                <p className="currentMedInfo">{this.props.notes}</p>
            </a>

            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <button id="taken" className="btn" onClick={()=> this.props.take(this.props.id,this.props.index)} type="button">taken</button>
                </div>
            </div>
        </div>
    }
}

export default CurrentMed
