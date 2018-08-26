import React, { Component } from "react";

export default class PaymentMethod extends Component{
    render(){
        return (
            <form>
                <div className="container">
                    <h1>Select payment method</h1>
                    <ul className="dropdown">
                        <li><a href="">Sub-1</a></li>
                        <li><a href="">Sub-2</a></li>
                        <li><a href="">Sub-3</a></li>
                    </ul>
                    <button type="submit" className="button">Finish Order</button>
                </div>
            </form>
        )
    }
}