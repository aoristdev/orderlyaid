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
                <div className="col-sm-3">
                <p className="text-center">{medInfo.name}</p>
                </div>
                <div className="col-sm-3">
                <p className="text-center">{medInfo.total}</p>
                </div>
                <div className="col-sm-4">
                <p className="text-center">{medInfo.dosage}</p>
                </div>
                <div className="col-sm-2">
                <p className="text-center">{medInfo.count}</p>
                </div>
            </div>
        </div>
        })

        return <div>

            <div className="row medTableTitle">
                <div className="col-sm-3">
                    <p className="text-center">Medication</p>
                </div>
                <div className="col-sm-3">
                    <p className="text-center">Quantity</p>
                </div>
                <div className="col-sm-4">
                    <p className="text-center">Dosage</p>
                </div>
                <div className="col-sm-2">
                    <p className="text-center">Remaining</p>
                </div>
            </div>
             {info}
        </div>
    }
}
export default AllMeds