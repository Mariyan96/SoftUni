import React, { Component } from "react";
import author from './style/author.png'
export default class Welcome extends Component {
    render() {
        return (
                <div>
                    <h1>Welcome to my webpage for online shopping and express delivery.</h1>
                    <img alt="author" src={author}></img>
                    <h4>Creator: Mariyan Dimitrov</h4>
                    <footer>You want to order something too? Please
                        <a href="/#loginForm">Login</a> or
                        <a href="/#registerForm">Register</a>
                    </footer>
                </div>
        );
    }
}

