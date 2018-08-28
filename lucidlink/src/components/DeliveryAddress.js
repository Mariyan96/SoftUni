import React, {Component} from "react";

let data;
export default class DeliveryAddress extends Component {
    constructor(props) {
        super(props);
        //passing the order details to other screen if we want to go back
        //it's easier and more efficient from performance point of view
        //because sessionStorage can only set string variable we are parsing the object into string
        data = JSON.parse(sessionStorage.getItem('currentOrder'));
        //setting initial values to order properties
        this.state = {
            order: data.order ||
            {
                productName: '',
                productPrice: 0,
                numberOfProducts: 0,
                subtotal: 0
            },
            delivery: data.delivery ||
            {
                country: '',
                region: '',
                postalCode: '',
                street: '',
                details: ''
            },
            paymentMethod: data.paymentMethod || {}
        }
    }

    //saving every input
    handleChange = function (propertyName, event) {
        let deliveryData = this.state.delivery;
        deliveryData[propertyName] = event.target.value;
        this.setState({delivery: deliveryData});
    };
    //redirecting to the next screen after saving the session
    redirectToPaymentMethod = (e) => {
        e.preventDefault();
        data = this.state;
        sessionStorage.setItem('currentOrder', JSON.stringify(data));
        window.location = '/#PaymentMethod'
    };
    //redirecting to the previous screen after saving the session
    goBack = (e) => {
        e.preventDefault();
        data = this.state;
        sessionStorage.setItem('currentOrder', JSON.stringify(data));
        window.location = "/#/OrderItem";
    }

    render() {
        return (
            <form onSubmit={this.redirectToPaymentMethod}>
                <div className="container">

                    <h1>Could you enter the address for the delivery?</h1>
                    <div>
                        <p>Country:</p>
                        <input onChange={this.handleChange.bind(this, 'country')}
                               value={this.state.delivery.country}
                               type="text"
                               placeholder="Bulgaria"/>

                        <h3>Region:</h3>
                        <input onChange={this.handleChange.bind(this, 'region')}
                               value={this.state.delivery.region}
                               type="text"
                               placeholder="Sofia"/>

                        <h3>Postal Code:</h3>
                        <input onChange={this.handleChange.bind(this, 'postalCode')}
                               value={this.state.delivery.postalCode}
                               type="text"
                               placeholder="1000"/>

                        <h3>Street:</h3>
                        <input onChange={this.handleChange.bind(this, 'street')}
                               value={this.state.delivery.street}
                               type="text"
                               placeholder="8December street"/>

                        <h3>Details:</h3>
                        <input onChange={this.handleChange.bind(this, 'details')}
                               value={this.state.delivery.details}
                               type="text"
                               placeholder="floor 3,flat 8 "/>
                    </div>

                    <div>
                        <button onSubmit={e => this.redirectToPaymentMethod(e)}
                                type="submit"
                                className="button">Continue
                        </button>
                        <br/>
                        <button onClick={e => this.goBack(e)} className="backButton">Go Back</button>
                    </div>
                </div>
            </form>
        )
    }
}