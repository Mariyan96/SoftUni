import React, {Component} from "react";
import axios from "axios";

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_rkL4lQyvm';
let data;
export default class paymentDetails extends Component {

    constructor(props) {
        data = JSON.parse(sessionStorage.getItem('currentOrder'));
        super(props);
        //main structure for the current order with nested properties
        this.state = {
            order: data.order     ||
            {
                productName:'',
                productPrice:0,
                numberOfProducts:0,
                subtotal:0
            },
            delivery:data.delivery ||
            {
                country:'',
                region:'',
                postalCode:'',
                street:'',
                details:''
            },
            paymentDetails: data.paymentDetails ||
            {
                card:{
                    firstName:'',
                    lastName:'',
                    cardNumber:'',
                    securityCode:'',
                    expMonth:'',
                    expYear:'',
                    billingAddress:''
                },
                cash:{
                    firstName:'',
                    lastName:'',
                    idCardNumber:'',
                    expMonth:'',
                    expYear:'',
                    billingAddress:''
                },
                bitCoin:{
                    firstName:'',
                    lastName:'',
                    bitCoinWallet:'',
                    walletPassword:'',
                    billingAddress:''
                }
            },
            paymentMethod: data.paymentMethod ||''
        }
    }

    finishOrder = (e) => {
        //preventing refresh
        e.preventDefault();

        data.paymentDetails = this.state.paymentDetails;
        data.paymentMethod=this.state.paymentMethod;
        //posting to the database
        axios.post(BASE_URL + 'appdata/' + APP_KEY + '/Orders', data,
            {headers: {'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`}})
            .then(function (res) {
                console.log(res);
                //redirecting to user page
                window.location = '/#Orders';

            }).catch(function (err) {
                throw err;
        })
        //after the order  ,we don`t need to keep in the session storage anything useless
        sessionStorage.setItem('currentOrder', '{}');
    }
    //saving every input
    handleChange = function(propertyName,method,event){
        let paymentDetails;
        //a switch to decide what payment form needs to be rendered
        switch (method){
            case 'card':
                paymentDetails = this.state.paymentDetails.card;
                paymentDetails[propertyName] = event.target.value;
                this.setState({
                    card: paymentDetails
                });
                break;
            case 'cash':
                paymentDetails = this.state.paymentDetails.cash;
                paymentDetails[propertyName] = event.target.value;
                this.setState({
                    cash: paymentDetails
                });
                break;

            case 'bitCoin':
                paymentDetails = this.state.paymentDetails.bitCoin;
                paymentDetails[propertyName] = event.target.value;
                this.setState({
                    bitCoin: paymentDetails
                });
                break;
            default :
                break;

        }

    }
    paymentForm = () => {
        //the switch with different JSC 'templates'
        switch (this.state.paymentMethod) {
            case 'Card':
                return <div>
                    <div>First Name: </div>
                    <input onChange={this.handleChange.bind(this, 'firstName','card')}
                           value={this.state.paymentDetails.card.firstName}
                           type="text"
                           placeholder="Prakash" />
                    <br/>

                    <div>Last Name: </div>
                    <input onChange={this.handleChange.bind(this, 'lastName','card')}
                           value={this.state.paymentDetails.card.lastName}
                           type="text"
                           placeholder="Dimitrov"/>

                    <br/>

                    <div>Card Number: </div>
                    <input onChange={this.handleChange.bind(this, 'cardNumber','card')}
                           value={this.state.paymentDetails.card.cardNumber}
                           type="text"
                           placeholder="8456-8452-9421-4862" />
                    <br/>

                    <div>Security Code: </div>
                    <input onChange={this.handleChange.bind(this, 'securityCode','card')}
                           value={this.state.paymentDetails.card.securityCode}
                           type="text"
                           placeholder="256" />
                    <br/>

                    <div>Expiration Month: </div>
                    <input onChange={this.handleChange.bind(this, 'expMonth','card')}
                           value={this.state.paymentDetails.card.expMonth}
                           type="text"
                           placeholder="12" />

                    <br/>

                    <div>Expiration Year: </div>
                    <input onChange={this.handleChange.bind(this, 'expYear','card')}
                           value={this.state.paymentDetails.card.expYear}
                           type="text"
                           placeholder="2020" />
                    <br/>

                    <div>Billing Address: </div>
                    <input onChange={this.handleChange.bind(this, 'billingAddress','card')}
                           value={this.state.paymentDetails.card.billingAddress}
                           type="text"
                           placeholder="Sofia, 8 December street №2 " />

                </div>
            case 'Cash':
                return <div>
                    <div>

                        <div>First Name: </div>
                        <input onChange={this.handleChange.bind(this, 'firstName','cash')}
                               value={this.state.paymentDetails.cash.firstName}
                               type="text"
                               placeholder="Prakash"/>

                        <br/>

                        <div>Last Name: </div>
                        <input onChange={this.handleChange.bind(this, 'lastName','cash')}
                               value={this.state.paymentDetails.cash.lastName}
                               type="text"
                               placeholder="Dimitrov"/>

                        <br/>

                        <div>ID Card Number: </div>
                        <input onChange={this.handleChange.bind(this, 'idCardNumber','cash')}
                               value={this.state.paymentDetails.cash.idCardNumber}
                               type="text"
                               placeholder="8806217912"/>

                        <br/>

                        <div>Expiration Month: </div>
                        <input onChange={this.handleChange.bind(this, 'expMonth','cash')}
                               value={this.state.paymentDetails.cash.expMonth}
                               type="text"
                               placeholder="12"/>

                        <br/>

                        <div>Expiration Year: </div>
                        <input onChange={this.handleChange.bind(this, 'expYear','cash')}
                               value={this.state.paymentDetails.cash.expYear}
                               type="text"
                               placeholder="2020"/>

                        <br/>

                        <div>Billing Address: </div>
                        <input onChange={this.handleChange.bind(this, 'billingAddress','cash')}
                               value={this.state.paymentDetails.cash.billingAddress}
                               type="text"
                               placeholder="Sofia, 8 December street №2 "/>

                    </div>
                </div>
            case 'BitCoin':
                return<div>
                    <div>First Name: </div>
                    <input onChange={this.handleChange.bind(this, 'firstName','bitCoin')}
                           value={this.state.paymentDetails.bitCoin.firstName}
                           type="text"
                           placeholder="Prakash"/>
                    <br/>
                    <div>Last Name: </div>
                    <input onChange={this.handleChange.bind(this, 'lastName','bitCoin')}
                           value={this.state.paymentDetails.bitCoin.lastName}
                           type="text"
                           placeholder="Dimitrov"/>
                    <br/>
                    <div>BitCoin Wallet: </div>
                    <input onChange={this.handleChange.bind(this, 'bitCoinWallet','bitCoin')}
                           value={this.state.paymentDetails.bitCoin.bitCoinWallet}
                           type="text"
                           placeholder="mus6mt8m7o"/>
                    <br/>
                    <div>Wallet Password: </div>
                    <input onChange={this.handleChange.bind(this, 'walletPassword','bitCoin')}
                           value={this.state.paymentDetails.bitCoin.walletPassword}
                           type="password"/>
                    <br/>
                    <div>Billing Address: </div>
                    <input onChange={this.handleChange.bind(this, 'billingAddress','bitCoin')}
                           value={this.state.paymentDetails.bitCoin.billingAddress}
                           type="text"
                           placeholder="Sofia, 8 December street №2 "/>
                </div>
            default:
                return undefined;
        }
    }
    changeForm =(e) =>{
        this.setState({
            paymentMethod:e.target.value
        });
    }
    goBack = (e) => {
        e.preventDefault();
        data = this.state;
        sessionStorage.setItem('currentOrder', JSON.stringify(data));
        window.location = "/#/DeliveryAddress";
    }

    render() {
        return (
            <form onSubmit={this.finishOrder}>
                <div className="container">
                    <h1>Select payment method</h1>
                    <div>
                        <select value={this.state.paymentMethod}
                                onChange={e=>this.changeForm(e)}>
                            <option>--</option>
                            <option value="Card">Card</option>
                            <option value="Cash">Cash</option>
                            <option value="BitCoin">BitCoin</option>
                        </select>
                    </div>
                    {this.paymentForm()}
                    <div>
                        <button type="submit"
                                onSubmit={e => this.finishOrder(e)}
                                className="button">Finish Order
                        </button>

                        <br/>

                        <button onClick={e => this.goBack(e)}
                                className="backButton">Go Back</button>
                    </div>
                </div>
            </form>
        )
    }
}