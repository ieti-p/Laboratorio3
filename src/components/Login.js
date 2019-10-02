import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import TextField from '@material-ui/core/TextField';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', isUserLoggedIn: false };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(event) {
        console.log("event.target.value:  " + event.target.value);
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }


    handleLogin(event) {
        event.preventDefault();
        console.log("username " + this.state.username);
        console.log("password " + this.state.password);
        this.setState({ isUserLoggedIn: true });
    }
    render() {

        if (this.state.isUserLoggedIn) {
            return <Redirect to={{
                pathname: '/home',
                state: { username: this.state.username }           
            }}

            />
        }

        return (
            <form>
                <br />
                <h2> Porfavor Ingrese sus credenciales </h2>
                <label>
                    Username:
                    <TextField
                        id="corre"
                        label="Email"
                        className={"login"}
                        type="email"
                        name="username"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />



                   
                </label>
                <br />
                <label>
                    Password:
                    <TextField
                        id="con"
                        label="Password"
                        className={"login"}
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                  
                </label>
                <br />
                <br />
                <button onClick={this.handleLogin}>Login</button>
            </form>
        )
    }
}