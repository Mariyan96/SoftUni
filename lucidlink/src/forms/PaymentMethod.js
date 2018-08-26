import React, { Component } from "react";
import axios from "axios";
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rkL4lQyvm';
let data;
export default class PaymentMethod extends Component{

    constructor(props){
        data = JSON.parse(sessionStorage.getItem('currentOrder'));
        super(props);
        this.state={
            product:data.product||'',
            price:data.price||0,
            numberOfProducts:data.numberOfProducts||0,
            subtotal:data.subtotal,
            deliveryAddress:data.deliveryAddress||'',
            paymentMethod:data.paymentMethod||''
        }
    }
    finishOrder = (e)=>{
        e.preventDefault();
        data=this.state;
        axios.post(BASE_URL+'appdata/'+APP_KEY+'/Orders',data,
            {headers:{'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`}})
            .then(function (res)
            {
                console.log(res);
                //redirecting to user page
                window.location ='/#Orders';

            }).catch(function (err) {
        })
        sessionStorage.setItem('currentOrder','{}');
    }
    //saving every input
    changeInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.finishOrder} >
                <div className="container">
                    <h1>Select payment method</h1>
                    <div>
                    <select name='paymentMethod' value={this.state.paymentMethod} onChange={e=>this.changeInput(e)}>
                        <option>--</option>
                        <option value="Card">Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bitcoin">Bitcoin</option>
                    </select>
                    </div>
                    <a href="/#DeliveryAddress">Go Back</a>
                    <br/>
                    <button type="submit" onSubmit={e=>this.finishOrder(e)} className="button">Finish Order</button>

                </div>
            </form>
        )
    }
}