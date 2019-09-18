import React from 'react';

import TextField from '@material-ui/core/TextField';
//import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
import './login.css';
import granated from './granated';
//import granated from './granated';
//import Typography from '@material-ui/core/Typography';


export default function Login() {
  return (

    <div className="login" text-justify="inter-word" >
      <header className="login-header" >
        <Router>
          <div>
            <ul>
              <h1>Task Planner</h1>
              <h2>Ingrese los datos de inicio</h2>
              <li>
                <Link to="/granated">Login</Link>
              </li>
              <li>
                <Link to="/users">Create Acoount</Link>
              </li>
              <li>
                <Link to="/sumama">Perro</Link>
              </li>
            </ul>
            <Route exact path="/granated" component={granated} />
            <Route exact path="/registro" component={granated} />
            <TextField
              id="corre"
              label="Email"
              className={"login"}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="con"
              label="Password"
              className={"login"}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </div>
        </Router>
      </header>

    </div>

  );

}


//export default Login;
