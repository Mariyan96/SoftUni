import React, { Component } from "react";
import axios from "axios";
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rkL4lQyvm';
export default class Orders extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:sessionStorage.getItem('username')
        }
    }
    submitLogout = (e)=>{
        e.preventDefault();
        axios.post(BASE_URL + 'user/'+APP_KEY + '/_logout','',
            {
                headers: {'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`
                }}
                ).then(function (res)
        {
            console.log(res);
            //clearing all session
            sessionStorage.clear();
            //redirecting to home page
            window.location ='/';
        }).catch(function (err) {
            console.log(err);
        })
    };
    render(){
        return (
            <form className="MyOrders" onSubmit={this.submitLogout}>
                <h1>{this.state.username}'s Orders</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Product</th>
                        <th>Price per Unit</th>
                        <th>Address for Delivery </th>
                        <th>Payment method</th>
                        <th>Sub-Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>item.order</td>
                        <td>item.brand</td>
                        <td>item.price</td>
                        <td>item.address</td>
                        <td>item.address</td>

                        <td>total</td>
                    </tr>
                    <tr>
                        <td>item.order</td>
                        <td>item.brand</td>
                        <td>item.model</td>
                        <td>item.price</td>
                        <td>item.address</td>
                        <td>total</td>
                    </tr>
                    <tfoot>
                    <tr>TOTAL:</tr>
                    </tfoot>
                    </tbody>
                </table>
                <div className="container signin">
                    <button type="submit" onSubmit={e=>this.submitLogout(e)} className="button">Logout</button>
                </div>
            </form>
        )
    }
}

