import React, {Component} from "react";
import axios from "axios";

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_rkL4lQyvm';
sessionStorage.setItem('currentOrder', '{}');

export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('username'),
            grandTotal: 0,
            myProducts: []
        }

    }

    submitLogout = (e) => {
        //preventing page refresh
        e.preventDefault();
        //getting post request to the database so we can no longer submit new orders
        axios.post(BASE_URL + 'user/' + APP_KEY + '/_logout', '', {
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`
            }
        }).then(function (res) {
            //clearing the session
            sessionStorage.clear();
            //redirecting to home page
            window.location = '/';
        }).catch(function (err) {
            console.log(err);
        })
    }

    componentDidMount() {
        axios.get(BASE_URL + 'appdata/' + APP_KEY + `/Orders?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}&sort={"_kmd.ect": -1}/`,
            {
                headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
            }).then((res) => {
                //after getting the promise with all the data, we re calculating the grandTotal
            let sum = 0;
            res.data.map(entry =>
                sum += parseInt(entry.order.subtotal, 10)
            )
            //setting the grandTotal
            this.setState({
                myProducts: res.data,
                grandTotal: sum
            })
        }).catch(function (err) {
            throw err;
        })
    }

    render() {
        return (
            <form className="MyOrders" onSubmit={this.submitLogout}>
                <h1>{this.state.username}'s Orders</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Product</th>
                        <th>Price per Unit</th>
                        <th>Number of products</th>
                        <th>Address for Delivery</th>
                        <th>Payment method</th>
                        <th>Sub-Total</th>
                    </tr>
                    </thead>
                    <tbody id="orders">
                    {/*every data piece is individual table row with credentials*/}
                    {this.state.myProducts.map((row, i) =>
                        <tr key={`products-row-${i}`}>
                            <td>{i + 1}</td>
                            <td>{row.order.productName}</td>
                            <td>{row.order.productPrice}</td>
                            <td>{row.order.numberOfProducts}</td>
                            <td>{row.delivery.street}</td>
                            <td>{row.paymentMethod}</td>
                            <td>{row.order.subtotal}</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={7}>TOTAL: {this.state.grandTotal}</td>
                    </tr>
                    </tfoot>
                </table>

                <div className="container signin">
                    <a href="/#OrderItem">New order</a>
                    <br/>
                    <button type="submit" onSubmit={e => this.submitLogout(e)} className="button">Logout</button>
                </div>
            </form>
        )
    }
}