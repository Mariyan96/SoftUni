import React, { Component } from "react";

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.onInputChanged=this.onInputChanged.bind(this);
    }
    submitRegister=(event)=>{
        console.log(this.props)
    }
    onInputChanged (event){
        this.setState({
            value:event.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.submitRegister}>
                <div className="container">
                    <h1>Register Form</h1>
                    <p>Please fill in this form to create an account.</p>
                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required></input>
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required></input>
                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required></input>
                    <button type="submit" className="button">Register</button>
                </div>
                <div className="container switchform">
                    <p>Already have an account?
                        <a href="/#loginForm">Login</a>.</p>
                </div>
            </form>
        )
    }
}
