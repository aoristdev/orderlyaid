import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import store from 'store'

class FirstQ extends Component {

     constructor(props) {
        super(props)
        this.save = this.save.bind(this)

        this.state = {
            oauth_token: '',
            email: '',
            howActive: '',
            timeOfDay: '',
            specificTime: ''
        }
    }

    componentWillMount() {
      let savedInfo = store.get('savedInfo', [])
      if (this.props.params.index) {
        let savedInfo = savedInfo[this.props.params.index]
        this.setState({
            oauth_token: savedInfo.oauth_token,
            email: savedInfo.email,
            howActive: savedInfo.howActive,
            timeOfDay: savedInfo.timeOfDay,
            specificTime: savedInfo.specificTime
        }) 
      }
    }

    save() {
      let savedInfo = store.get('savedInfo', [])
        if ( ! this.props.params.index) {
            savedInfo.push(this.state)
        }
        else {
            savedInfo[this.props.params.index] = this.state
        }
        store.set('savedInfo', savedInfo)
        browserHistory.push('/profile')
    }

    value={this.state.specificTime} onChange={(e) => this.setState({specificTime:e.target.value})}