import React, { Component } from "react";
let data;
export default  class OrderItem extends Component{
    constructor (props){
        super(props);
        //because we are passing the current order properties here we are getting the current order properties if there are some
        data = JSON.parse(sessionStorage.getItem('currentOrder'));
        this.state={
            product:data.product||'',
            price:data.price||0,
            numberOfProducts:data.numberOfProducts||0,
            subtotal:data.subtotal,
            deliveryAddress:data.deliveryAddress||'',
            paymentMethod:data.paymentMethod||''
        }

    }
    //saving every input
    changeInput =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    //after clicking continue
    redirectToDeliveryAddress = async (e)=>{
        //preventing page refreshing
        e.preventDefault();
        //await and async needed for JS compiler to wait a little to calculate subtotal before
        //posting it in HTML
        await this.setState(prevState=>({
            subtotal:prevState.subtotal=this.state.numberOfProducts*this.state.price
        }));
        data = this.state;
        sessionStorage.setItem('currentOrder',JSON.stringify(data));
        window.location='/#DeliveryAddress';
    }
    render(){
        return (
            <form onSubmit={this.redirectToDeliveryAddress}>
                <div className="container">
                    <h1>Make an order</h1>
                    <p>Product</p>
                    <input type="text"
                           value={this.state.product}
                           onChange={e=>this.changeInput(e)}
                           placeholder="Enter here"
                           name="product"></input>
                    <p>Price per Unit</p>
                    <input type="number" value={this.state.price} onChange={e=>this.changeInput(e)} placeholder="Enter here" name="price"></input>
                    <p>Number of products</p>
                    <input type="number" value={this.state.numberOfProducts} onChange={e=>this.changeInput(e)} placeholder="Enter here" name="numberOfProducts"></input>
                    <p>Sub Total</p>
                    <h3 name="subtotal">{this.state.numberOfProducts *this.state.price}</h3>
                    <a href="/#Orders">Go Back</a>
                    <button type="submit" onSubmit={e=>this.redirectToDeliveryAddress(e)} className="button">Continue</button>
                </div>
            </form>
        )
    }
}