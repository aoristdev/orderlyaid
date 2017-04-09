import React from 'react'

class AddDescription extends React.Component { 

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
    <button type="submit" className="btn btn-default">Add More</button>
</div>

    }
}

export default AddDescription 