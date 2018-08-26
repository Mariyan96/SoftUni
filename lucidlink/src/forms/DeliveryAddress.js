import React, { Component } from "react";
let data;
export default class DeliveryAddress extends Component{
    constructor(props){
        super(props);
        //passing the order details to other screen if we want to go back
        //it's easier and more efficient from performance point of view
        //because sessionStorage can save only string variable we are parsing the object into string
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
    changeInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    //redirecting to the next screen if everything is okay
    redirectToPaymentMethod = (e)=>{
        e.preventDefault();
        data=this.state;
        sessionStorage.setItem('currentOrder',JSON.stringify(data));
        window.location='/#PaymentMethod'
    }
    render(){
        return (
            <form onSubmit={this.redirectToPaymentMethod}>
                <div className="container">
                    <h1>Could you enter the address for the delivery?</h1>
                    <div>
                    </div>
                    <input onChange={e=>this.changeInput(e)} value={this.state.deliveryAddress} type="text" placeholder="Enter here" name="deliveryAddress"></input>
                    <a href="/#OrderItem">Go Back</a>
                    <br/>
                    <button onSubmit={e=>this.redirectToPaymentMethod(e)} type="submit" className="button">Continue</button>
                </div>
            </form>
        )
    }
}