import React from 'react'


class MedHistory extends React.Component { 
      constructor(props) {
        super(props)
    
        this.state = {
            prescriptions: []
        }
    }
     componentDidMount() {
        fetch('/reminders/all?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({...res}))
            .then(res => console.log(this.state))
    }
render(){

    return<div>

            <div className="row historyTitle">
                <div className="col-sm-3">
                <p className="text-center">Date</p>
                </div>
                <div className="col-sm-3">
                <p className="text-center">Time Taken</p>
                </div>
                <div className="col-sm-4">
                <p className="text-center">Medication</p>
                </div>
                <div className="col-sm-2">
                <p className="text-center">Count</p>
                </div>
            </div>
    
     <div className="panel panel-default">
        <div className="panel-body">
            <div className="row historyData">
                <div className="col-sm-3">
                <p className="text-center">04.11.2017</p>
                </div>
                <div className="col-sm-3">
                <p className="text-center">3:00 pm</p>
                </div>
                <div className="col-sm-4">
                <p className="text-center">{this.props.name}</p>
                </div>
                <div className="col-sm-2">
                <p className="text-center">2</p>
                </div>
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            <div className="row">
                <div className="col-sm-3">
                <p className="text-center">04.11.2017</p>
                </div>
                <div className="col-sm-3">
                <p className="text-center">3:00 pm</p>
                </div>
                <div className="col-sm-4">
                <p className="text-center">Advil</p>
                </div>
                <div className="col-sm-2">
                <p className="text-center">2</p>
                </div>
            </div>
        </div>
    </div>
    
   
    

</div>
}
}
export default MedHistory