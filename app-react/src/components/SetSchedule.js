import React from 'react'
import { browserHistory } from 'react-router'

class SetSchedule extends React.Component { 

      goToAddDescription() {
       browserHistory.push('/description')
   }
   
render(){
  

    return<div>
    <h1>Set your schedule.</h1>
        <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input type="text" className="form-control" id="startDate" />

            <label htmlFor="quantity">Perscription Quantity</label>
            <input type="text" className="form-control" id="quantity" />

            <div className="radio">
                <label>
                    <input type="radio" name="everyday" id="everyday" value="everyday" />
                    Everyday
                </label>
            </div>

            <div className="radio">
                <label>
                    <input type="radio" name="scheduledDays" id="scheduledDays" value="scheduledDays" />
                    Scheduled Days
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value="" />
                    Sunday
                </label>
                <label>
                    <input type="checkbox" value="" />
                    Monday
                </label>
                <label>
                    <input type="checkbox" value="" />
                    Tuesday
                </label>
                <label>
                    <input type="checkbox" value="" />
                    Wednesday
                </label>
                    <label>
                    <input type="checkbox" value="" />
                    Thursday
                </label>
                    <label>
                    <input type="checkbox" value="" />
                    Friday
                </label>
                    <label>
                    <input type="checkbox" value="" />
                    Saturday
                </label>
                <button type="submit" className="btn btn-default" onClick={this.goToAddDescription}>Add</button>
            </div>
        </div>
    </div>
}
}
export default SetSchedule