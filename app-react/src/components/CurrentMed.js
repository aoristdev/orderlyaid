import React from 'react'
import './css/todaysmeds.css'
class CurrentMed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prescriptions: ''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    
    render() {
        console.log(this.props)
        return <div className="well currentMed transform">
            <a name={'currentMed' + this.props.index}></a>
            <p className="medicationName">{this.props.name}</p>
            <p className="dosage">{this.props.dosage} Capsules</p>
                <a href="#" id="listItem" className="list-group-item">
                    <h4 className="list-group-item-heading">Instructions</h4>
                    <p className="list-group-item-text">{this.props.instructions}</p>
                </a>
                <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">Cautions</h4>
                    <p className="list-group-item-text">{this.props.caution}</p>
                </a>
                
                <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">Notes</h4>
                    <p className="list-group-item-text">{this.props.notes}</p>
                </a>

            <div className="row">
                <div className="col-sm-6 col-sm-offset-3" >                
                    <button id="taken" type="button" className="btn btn-link">taken</button>
                </div>
                {/*<div className="col-sm-6">
                    <button type="button" className="reschedule border btn btn-link">reschedule</button>
                </div>*/}
            </div>
        </div>
    }
}

export default CurrentMed