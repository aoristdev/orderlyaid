import React from 'react'
import './css/medTables.css'
import moment from 'moment'

class MedHistory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info: []
        }
    }
    componentDidMount() {
        fetch('/rx/all?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({ info: res }))
            .then(res => console.log(this.state.info))
    }
    render() {
        let info = this.state.info.map((medInfo, i) => {
            return <div className="panel-body dataBorder" key={i}>
                <div className="row historyData">
                    <div className="col-sm-4">
                        <p className="text-name" id="textInfoName"><span className="textInfoNameTitle">Name: </span>{medInfo.name}</p>
                        <p className="text-name" id="textInfoName"><span className="textInfoNameTitle">Taken: </span>yes</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="textHisCount" id="textInfo"><span className="textInfoNameTitle">{medInfo.dosage} Caspules</span></p>
                    </div>
                    <div className="col-sm-4">
                        <p className="textHis" id="textInfo">{moment(medInfo.last_taken).format('h:mm a, MMM D')}</p>
                    </div>
                </div>
            </div>
        })

        return <div>
            <p className="tablesTitles">Archived Reminders</p>
            <div className="row medTableTitle">
                <div className="col-sm-4">
                    <p className="text-center">Medication Name</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-center">Dosage Taken</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-center">Time</p>
                </div>
            </div>
            {info}
        </div>
    }
}
export default MedHistory