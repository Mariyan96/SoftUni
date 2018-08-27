import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Welcome from "./Welcome.js";
import Orders from "./components/Orders";
import OrderItem from "./components/OrderItem";
import DeliveryAddress from "./components/DeliveryAddress";
import PaymentMethod from "./components/PaymentMethod"
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

