import React from 'react'
import { browserHistory } from 'react-router'
// import './css.addpatient.css'

class SetReminders extends React.Component { 
    goToSetSchedule() {
    browserHistory.push('/new/schedule')
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
render (){

return<div>
  <h1>Set your reminder.</h1>
    <div className="form-group">
        <p className="fieldLabel">Start Date</p>
        <input type="text" className="form-control" id="startDate" />

        <p className="fieldLabel">End Date</p>
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