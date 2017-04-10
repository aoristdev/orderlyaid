import React from 'react'
import { browserHistory } from 'react-router'

class SetReminders extends React.Component { 
    goToSetSchedule() {
    browserHistory.push('/schedule')
   }
render (){

return<div>
  <h1>Set your reminder.</h1>
    <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input type="text" className="form-control" id="startDate" />

        <label htmlFor="endDate">End Date</label>
        <input type="text" className="form-control" id="endDate" />

        <div className="radio">
            <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="continuous" />
                Continuous
            </label>
        </div>
        <select className="form-control">
            <label> How many times per day?
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </label>
        </select>
            <select className="form-control">
            <label> Dosage
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </label>
        </select>
    </div>
     <button type="submit" className="btn btn-default" onClick={this.goToSetSchedule}>Add</button>
</div>
}
}
export default SetReminders