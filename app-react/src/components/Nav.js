import React from 'react'
import { browserHistory } from 'react-router'
// import Profile from './components/Profile'
import './css/nav.css'

class Nav extends React.Component { 
    componentDidMount(){
        browserHistory.push('/nav/profile')
    }
    
     signedout() {
        sessionStorage.removeItem('token')
        browserHistory.push('/signin')
    }
    
render(){

    return<div>
    <div className="mainNav container-fluid">
            <div className="mainNav">
                <div className="row">
                    <div className="col-sm-6">
                        {/*<img src="./img/capsule.png" alt="..." className="logo" />*/}
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-default pull-right" onClick={this.signedout}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
            {this.props.children}
        <div className="footer container-fluid">
            <div className="row">
                <div className="col-sm-12">
                <h2>orderlyaid y'all</h2>
                </div>
            </div>
        </div>
    </div>
}
}
export default Nav