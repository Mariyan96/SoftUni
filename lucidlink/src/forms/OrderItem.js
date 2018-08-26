import React, { Component } from "react";

export default class OrderItem extends Component{
    render(){
        return (
            <form>
                <div className="container">
                    <h1>Make an order</h1>
                    <p>Product</p>
                    <input type="text" placeholder="Enter here" name="product"></input>
                    <p>Price per Unit</p>
                    <input type="text" placeholder="Enter here" name="price"></input>
                    <p>Number of products</p>
                    <input type="text" placeholder="Enter here" name="numberOfProducts"></input>
                    <p>Sub Total</p>
                    <h3>32123??????</h3>
                    <button type="submit" className="button">Continue</button>
                </div>
            </form>
        )
    }
}

