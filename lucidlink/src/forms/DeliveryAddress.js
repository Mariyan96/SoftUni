import React, { Component } from "react";

export default class DeliveryAddress extends Component{
    render(){
        return (
            <form>
                <div className="container">
                    <h1>Could you enter the address for the delivery?</h1>
                    <div>

                    </div>
                    <input type="text" placeholder="Enter here" name="address"></input>
                    <button type="submit" className="button">Continue</button>
                </div>
            </form>
        )
    }
}