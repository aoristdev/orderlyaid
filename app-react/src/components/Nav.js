import React from 'react'
import { browserHistory } from 'react-router'

class Nav extends React.Component { 
render(){

    return<div>
    <div className="container-fluid">
            <div className="mainNav">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="./img/capsule.png" alt="..." className="logo" /> 
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-default pull-right onClick={this.*logout}" type="submit">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
}
export default Nav