import React, { Component } from "react";

export default class Login extends Component{
    render(){
        return (

            <form>
                <div className="container">
                    <h1>Login Form</h1>
                    <p>Please enter your credentials.</p>
                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text"></input>
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password"></input>
                    <button type="submit" className="button">Login</button>
                </div>
                <div className="container signin">
                    <p>Don't have an account?
                        <a href="/#registerForm">Register</a>.</p>
                </div>
            </form>
        )
    }
}

