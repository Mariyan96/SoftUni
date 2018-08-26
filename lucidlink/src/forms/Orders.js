import React, { Component } from "react";

export default class Orders extends Component{
    render(){
        return (
            <form className="MyOrders">
                <h1>My Orders</h1>
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
                    <p>
                        <a href="#/">Go Back?</a>
                    </p>
                </div>
            </form>
        )
    }
}

