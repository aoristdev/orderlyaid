import React from 'react'
import './css/medTables.css'

class AllMeds extends React.Component {
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
            return  <div className="panel-body dataBorder" key={i}>
            <div className="row historyData">
                <div className="col-sm-4">
                <p className="text-name" id="textInfoName"><span className="textInfoNameTitle">Name: </span>{medInfo.name}</p> 
                <p className="text-name" id="textInfoName"><span className="textInfoNameTitle">Dosage:</span> {medInfo.dosage}</p>
                </div>
                <div className="col-sm-4">
                <p className="textAll" id="textInfo">{medInfo.total}</p>
                </div>
                <div className="col-sm-4">
                <p className="textAll" id="textInfo">{medInfo.count}</p>
                </div>
            </div>
        </div>
        })

        return <div>
         <p className="tablesTitles">Your Medications</p>
            <div className="row medTableTitle">
                <div className="col-sm-4">
                    <p className="text-title">Medication</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-title">Refill Quantity</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-title">Pills Remaining</p>
                </div>
            </div>
             {info}
        </div>
    }
}
export default AllMeds