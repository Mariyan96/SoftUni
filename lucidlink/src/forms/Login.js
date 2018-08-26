import React, { Component } from "react";
import axios from "axios";
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rkL4lQyvm';
const APP_SECRET='a68bf94717df44a28856d4ecabc631ab';
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
    }
    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    submitLogin=(e)=>{
        e.preventDefault()
        const username=this.state.username;
        const password=this.state.password;
        let data = {username,password};
        axios.post(BASE_URL + 'user/'+APP_KEY + '/login',data,
            {
                headers: {'Authorization': 'Basic '+btoa(APP_KEY+':'+APP_SECRET)
            }}).then(function (res)
                {
                    //saving token,id and username in the session storage
                    sessionStorage.setItem('authToken',res.data._kmd.authtoken);
                    sessionStorage.setItem('userId',res.data._id);
                    sessionStorage.setItem('username',res.data.username);
                    //redirecting to user page
                    window.location ='/#Orders';
                }).catch(function (err) {
                        console.log(err);
                })
    };
    render(){
        return (
            <form onSubmit={this.submitLogin}>
                <div className="container">
                    <h1>Login Form</h1>
                    <p>Please enter your credentials.</p>
                    <p>Username</p>
                    <input value={this.state.username} onChange={e=>this.changeInput(e)} placeholder="Enter Username" name="username" type="text"></input>
                    <p>Password</p>
                    <input value ={this.state.password} onChange={e=>this.changeInput(e)} type="password" placeholder="Enter Password" name="password"></input>
                    <button type="submit" onSubmit={e=>this.submitLogin(e)} className="button">Login</button>
                </div>
                <div className="container signin">
                    <p>Don't have an account?
                        <a href="/#registerForm">Register</a>.</p>
                </div>
            </form>
        )
    }
}

