import React, {Component} from "react";

let data;
export default class OrderItem extends Component {
    constructor(props) {
        super(props);
        //because we are passing the current order properties here we are getting the current order properties if there are some
        data = JSON.parse(sessionStorage.getItem('currentOrder'));
        this.state = {
            order: data.order ||
            {
                productName: '',
                productPrice: 0,
                numberOfProducts: 0,
                subtotal: 0
            },
            delivery: data.delivery || {},
            paymentMethod: data.paymentMethod || {}
        }
    }

    //after clicking continue
    redirectToDeliveryAddress = (e) => {
        //preventing page refreshing
        e.preventDefault();
        //await and async needed for JS compiler to wait a little to calculate subtotal before
        //posting it in HTML
        data = this.state;
        sessionStorage.setItem('currentOrder', JSON.stringify(data));
        window.location = '/#/DeliveryAddress';
    }
    goBack = (e) => {
        e.preventDefault();
        data = this.state;
        sessionStorage.setItem('currentOrder', JSON.stringify(data));
        window.location = "/#/Orders";
    }
    //saving every input
    handleChange = function (propertyName, event) {
        let order = this.state.order;
        order[propertyName] = event.target.value;
        order.subtotal = this.state.order.numberOfProducts * this.state.order.productPrice;
        this.setState({order: order});
    };

    render() {
        return (
            <form onSubmit={this.redirectToDeliveryAddress}>

                <div className="container">
                    <h1>Make an order</h1>

                    <p>Product</p>
                    <input type="text" onChange={this.handleChange.bind(this, 'productName')}
                           value={this.state.order.productName}/>

                    <p>Price per Unit</p>
                    <input type="number" onChange={this.handleChange.bind(this, 'productPrice')}
                           value={this.state.order.productPrice}/>

                    <p>Number of products</p>
                    <input type="number" onChange={this.handleChange.bind(this, 'numberOfProducts')}
                           value={this.state.order.numberOfProducts}/>

                    <p>Sub Total</p>
                    <h3 onChange={this.handleChange.bind(this, 'subtotal')}>
                        {this.state.order.subtotal || 0}</h3>

                    <div>
                        <button type="submit" onSubmit={e => this.redirectToDeliveryAddress(e)}
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