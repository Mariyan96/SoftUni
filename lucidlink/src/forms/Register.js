import React, { Component } from "react";
import axios from 'axios';
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY='kid_rkL4lQyvm';
const APP_SECRET='a68bf94717df44a28856d4ecabc631ab';
export default class Register extends Component{
    //declaring the state with the user credentials
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            passwordRepeat:''
        };
    }
    //saving every new input
    changeInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    submitRegister = (e)=>{
        e.preventDefault()
           const username=this.state.username;
           const password=this.state.password;
           const passwordRepeat=this.state.passwordRepeat;

        if(password!==passwordRepeat){
            window.alert("Passwords should match!")
        //we can add register form validations
        }else{
            let data = {username:username,password:password};
            axios.post(BASE_URL + 'user/'+APP_KEY + '/',data,
                {headers: {'Authorization': 'Basic '+btoa(APP_KEY+':'+APP_SECRET)}
            })
            .then(function (res)
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
        }
    };
    render(){
        return (
            <form onSubmit={this.submitRegister}>
                <div className="container">
                    <h1>Register Form</h1>
                    <p>Please fill in this form to create an account.</p>
                    <p>Username</p>
                    <input value ={this.state.username} onChange={e=>this.changeInput(e)}    type="text" placeholder="Enter Username" name="username" required></input>
                    <p>Password</p>
                    <input value ={this.state.password} onChange={e=>this.changeInput(e)}  type="password" placeholder="Enter Password" name="password" required></input>
                    <p>Repeat Password</p>
                    <input value ={this.state.passwordRepeat} onChange={e=>this.changeInput(e)}  type="password" placeholder="Repeat Password" name="passwordRepeat" required></input>
                    <button type="submit" className="button" onSubmit={e=>this.submitRegister(e)}>Register</button>
                </div>
                <div className="container switchform">
                    <p>Already have an account?
                        <a href="/#loginForm">Login</a>.</p>
                </div>
            </form>
        )
    }
}
