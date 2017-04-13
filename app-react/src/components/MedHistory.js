import React from 'react'


class MedHistory extends React.Component { 
render(){

    return<div>

            <div className="row">
                <div className="col-sm-3">
                <p>Date</p>
                </div>
                <div className="col-sm-3">
                <p>Time Taken</p>
                </div>
                <div className="col-sm-4">
                <p>Medication</p>
                </div>
                <div className="col-sm-2">
                <p>Count</p>
                </div>
            </div>
    
     <div className="panel panel-default">
        <div className="panel-body">
            <div className="row">
                <div className="col-sm-3">
                <p>04.11.2017</p>
                </div>
                <div className="col-sm-3">
                <p>3:00 pm</p>
                </div>
                <div className="col-sm-4">
                <p>Advil</p>
                </div>
                <div className="col-sm-2">
                <p>2</p>
                </div>
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-body">
            <div className="row">
                <div className="col-sm-3">
                <p>04.11.2017</p>
                </div>
                <div className="col-sm-3">
                <p>3:00 pm</p>
                </div>
                <div className="col-sm-4">
                <p>Advil</p>
                </div>
                <div className="col-sm-2">
                <p>2</p>
                </div>
            </div>
        </div>
    </div>
    
   
    

</div>
}
}
export default MedHistory