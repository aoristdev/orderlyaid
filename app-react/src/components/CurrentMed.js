import React from 'react'

class CurrentMed extends React.Component {
    render() {
        return <div className="well currentMed">
            <a name={'currentMed' + this.props.index}></a>
            <p className="medicationName">Medication Name</p>
            <p className="dosage">2 Capsules</p>
            <div className="list-group">
                <a href="#" className="list-group-item active">
                    <h4 className="list-group-item-heading">Instructions</h4>
                    <p className="list-group-item-text">Take by mouth with water</p>
                </a>
                <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">Cautions</h4>
                    <p className="list-group-item-text">Not for women pregnant or nursing</p>
                </a>
                <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">Notes</h4>
                    <p className="list-group-item-text">Makes me nauseous without food</p>
                </a>
            </div>
            <div className="row ctaBtns">
                <div className="col-sm-6">
                    <button type="button" className="taken btn btn-link">taken</button>
                    {/*<button type="button" id="takenbtn"className="taken btn btn-default btn-sm">taken</button>*/}
                </div>
                <div className="col-sm-6">
                    <button type="button" className="reschedule border btn btn-link">reschedule</button>
                    {/*<button type="button" className="reschedule btn btn-default btn-sm">reschedule</button>*/}
                </div>
            </div>
        </div>
    }
}

export default CurrentMed