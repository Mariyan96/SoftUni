import React, { Component } from "react";
import axios from "axios";
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rkL4lQyvm';
sessionStorage.setItem('currentOrder','{}');
let myProducts;
let grandTotal=0;
export default class Orders extends Component{
        constructor(props){
        super(props);
        this.state ={
            username:sessionStorage.getItem('username'),
            grandTotal:0
        }
    }
    submitLogout = (e)=>{
            //preventing page refresh
        e.preventDefault();
        //getting post request to the database so we can no longer submit new orders
        axios.post(BASE_URL + 'user/'+APP_KEY + '/_logout','', {
                headers: {'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`
            }}).then(function (res)
            {
                //clearing the session
                sessionStorage.clear();
                //redirecting to home page
                window.location ='/';
            }).catch(function (err) {
                console.log(err);
            })
    };
    render(){
        //TODO filling up the orders table
        //getting products with the user's id
        function GetMyProducts() {
            axios.get(BASE_URL+'appdata/'+APP_KEY+`/Orders?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}&sort={"_kmd.ect": -1}/`,
                {
                    headers:{'Authorization': 'Kinvey '+ sessionStorage.getItem('authToken')}
                }).then(function (res) {
               myProducts=res.data;
               myProducts.map((order,i)=>
                   <td>
                       <tr>i</tr>
                       <tr>order.product</tr>
                       <tr>order.price</tr>
                       <tr>order.numberOfProducts</tr>
                       <tr>order.deliveryAddress</tr>
                       <tr>order.paymentMethod</tr>
                       <tr>order.subtotal</tr>
                   </td>
               )
               return myProducts;
            }).catch(function (err) {
                console.log(err);
            })
        };
        return (
            <form className="MyOrders" onSubmit={this.submitLogout}>
                <h1>{this.state.username}'s Orders</h1>
                {/*<table>*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                        {/*<th>Number</th>*/}
                        {/*<th>Product</th>*/}
                        {/*<th>Price per Unit</th>*/}
                        {/*<th>Address for Delivery </th>*/}
                        {/*<th>Payment method</th>*/}
                        {/*<th>Sub-Total</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody id="orders">*/}
                    {/*< GetMyProducts/>*/}
                    {/*</tbody>*/}
                    {/*/!*<tfoot>*!/*/}
                    {/*/!*<tr>TOTAL: {grandTotal}</tr>*!/*/}
                    {/*/!*</tfoot>*!/*/}
                {/*</table>*/}

                <div className="container signin">
                    <a href="/#OrderItem">New order</a>
                    <br/>
                    <button type="submit" onSubmit={e=>this.submitLogout(e)} className="button">Logout</button>
                </div>
            </form>
        )
    }
}

