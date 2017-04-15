import React from 'react'
import { browserHistory } from 'react-router'

class AddDescription extends React.Component {
    constructor(props) {
        super(props)
        this.goToAddMedication = this.goToAddMedication.bind(this)
        this.goToProfile = this.goToProfile.bind(this)
    }
    goToAddMedication() {
        browserHistory.push('/new/medication')
    }
    goToProfile() {
        browserHistory.push('/nav/profile/todaysmeds')
    }
    // addToCart(productId, name, qty) {
    //     fetch('/api/cart', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             product_id: productId,
    //             name: name,
    //             quantity: qty
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         let cart = this.state.cart
    //         cart.push(res)

    //         this.setState({cart: cart, message: 'Product added to cart successfully.'})

    //         browserHistory.push('/')
    //     })
    // }
    render() {

        return <div>
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
            <button type="button" className="btn btn-default" onClick={this.goToAddMedication}>Add More</button>
            <button type="button" className="btn btn-default" onClick={this.goToProfile}>Next</button>


        </div>


    }
}

export default AddDescription 