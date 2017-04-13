import React from 'react'
import './css/todaysmeds.css'

class TodaysMeds extends React.Component {
   
render (){

    return<div>
    <div className="panel panel-default">
        <div className="panel-body">
             <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <p className="currentTime">3:00</p>
                    <p className="todaysDate">Thursday, April 13</p>
                </div>
            </div>
            <div className="row listOfCurrentMeds">
                <div className="col-sm-4">
                </div>
                 <div className="col-sm-5">
                    <div className="well">
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
                </div>
                

                <div className="col-sm-4">
                </div>
            </div>   
        </div>
    </div>     
</div>                

}
}
export default TodaysMeds