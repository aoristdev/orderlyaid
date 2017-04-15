import React from 'react'
import { browserHistory } from 'react-router'
// import './css.addpatient.css'

class AddPatient extends React.Component {
        constructor(props) {
        super(props)
        this.goToAddMedication = this.goToAddMedication.bind(this)
        this.state = {
        }
   }

    goToAddMedication() {
        // /post patient
    
    browserHistory.push('/new/medication')
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
        return<div>
        <h1>Start by adding a patient.</h1>
            <div className="form-group">
                <p className="fieldLabel">Name</p>
                <input type="text" className="form-control" id="name" /><br/>

                <p className="fieldLabel">Birth Date</p>
                <input type="text" className="form-control" id="birthDate" /><br/>

                <p className="fieldLabel">Photo</p>
                <div className="input-group">
                    <div className="input-group-addon">URL</div>
                    <input type="text" className="form-control" id="photoUrl" /><br/>
                </div>
            </div>
        <button className="btn btn-default" onClick={this.goToAddMedication}>Add</button>
        </div>                                    
    }
}

export default AddPatient