import React from 'react'
import { browserHistory } from 'react-router'
import './css/addpatient.css'  

class AddMedication extends React.Component { 
    goToSetReminders() {
    browserHistory.push('/new/reminders')
   }

// addToCart(productId, name, qty) {
//         fetch('/api/cart', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 product_id: productId,
//                 name: name,
//                 quantity: qty
//             })
//         })
//         .then(res => res.json())
//         .then(res => {
//             let cart = this.state.cart
//             cart.push(res)

//             this.setState({cart: cart, message: 'Product added to cart successfully.'})

//             browserHistory.push('/')
//         })
//     }
render() {
// add med title
    return<div>
    <div className="form-group">
  
        <p className="fieldLabel">Medication Name</p>
        <input type="text" className="form-control" id="name" />
    </div>

   <button type="submit" className="btn btn-default" onClick={this.goToSetReminders}>Add</button>

    </div>
    }
}

export default AddMedication