import React from 'react'
import { browserHistory } from 'react-router'

class SetReminders extends React.Component { 
    goToSetSchedule() {
    browserHistory.push('/new/schedule')
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
        <select className="form-control" placeholder="how many times a day?">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
        </select>
            <select className="form-control" placeholder="dosage">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
        </select>
    </div>
     <button type="submit" className="btn btn-default" onClick={this.goToSetSchedule}>Add</button>
</div>
}
}
export default SetReminders