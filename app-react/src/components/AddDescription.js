import React from 'react'
import { browserHistory } from 'react-router'

class AddDescription extends React.Component { 
    constructor(props){
        super(props)
         this.goToProfile = this.goToProfile.bind(this)
    }
    goToAddMedication() {
    browserHistory.push('/new/medication')
   }
    goToProfile() {
    browserHistory.push('/nav/profile')
   }
render() {

    return<div>
    <h1>Make necessary edits to your medications description.</h1>
    <div className="form-group">
        <h3>Instructions</h3>
        <div className="well">
            <div className="radio">
                <label>
                    <input type="radio" name="noFood" id="noFood" value="noFood" />
                    No food needed
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="withFood" id="withFood" value="withFood" />
                    Take with food
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="before" id="before" value="before" />
                    Take before eating
                </label>
            </div>
                <div className="radio">
                <label>
                    <input type="radio" name="after" id="after" value="after" />
                    Take after eating
                </label>
            </div>
        </div>

        <h3>Cautions</h3>
            <div className="well">
            Some medications may decrease the effectivness of birthcontrol pills. Ask your Doctor or Pharmacist. 
        </div>
    </div>
    <button type="submit" className="btn btn-default" onClick={this.goToAddMedication}>Add More</button>
    <button type="submit" className="btn btn-default" onClick={this.goToProfile}>Next</button>
    
    
</div>


    }
}

export default AddDescription 