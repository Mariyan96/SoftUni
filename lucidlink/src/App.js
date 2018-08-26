import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Login from "./forms/Login.js";
import Register from "./forms/Register.js";
import Welcome from "./Welcome.js";
import Orders from "./forms/Orders";
import OrderItem from "./forms/OrderItem";
import DeliveryAddress from "./forms/DeliveryAddress";
import PaymentMethod from "./forms/PaymentMethod"
export default class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <div className="content">
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/loginForm" component={Login}/>
                    <Route exact path="/registerForm" component={Register}/>
                    <Route exact path="/Orders" component={Orders}/>
                    <Route exact path="/OrderItem" component={OrderItem}/>
                    <Route exact path="/DeliveryAddress" component={DeliveryAddress}/>
                    <Route exact path="/PaymentMethod" component={PaymentMethod}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

