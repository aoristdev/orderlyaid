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

    login(){
        fetch('/api/login?email=' + this.state.email + '&password=' + this.state.password, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
          if(response.ok) {
            return response.json()
          } else {
            throw 'Network response was not ok.'
          }
        })
        .then(browserHistory.push('/'))
        .catch((error) => {
          console.log('There has been a problem with your login fetch operation: ' + error.message)
        })
signup() {
        console.log(this.state.images)
        var data = new FormData()
            data.append('email', this.state.email)
            data.append('password', this.state.password)
            data.append('name', this.state.name)
            data.append('images', this.state.images)
        fetch('/api/signup', {
            body: data,
            method: 'POST'
        })
        .then(function(response) {
          if(response.ok) {
            return response.json()
          } else {
            throw 'Network response was not ok.'
          }
        })
        .then(this.signedUpHandler)
        .catch(function(error) {
        console.log('There has been a problem with your signup fetch operation: ' + error.message)
        })
    }
    addToCart(productId, name, qty) {
        fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_id: productId,
                name: name,
                quantity: qty
            })
        })
        .then(res => res.json())
        .then(res => {
            let cart = this.state.cart
            cart.push(res)

            this.setState({cart: cart, message: 'Product added to cart successfully.'})

            browserHistory.push('/')
        })
    }
