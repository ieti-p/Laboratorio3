import React from 'react';

import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import './login.css';
import granated from './granated';
//import granated from './granated';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function Login() {

  const classes = useStyles();


  return (

    <div className="login" text-justify="inter-word" >

      <header className="login-header" >

        <h1>Task Planner</h1>

        <h2>Ingrese los datos de inicio</h2>
        <TextField
          id="outlined-email-input"
          label="Email"
          className={"login"}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={"login"}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"

        />



        <Router>
          <div>
            <ul>
              <li>
                <Link to="/granated.js">Login</Link>
              </li>
              <li>
                <Link to="/users">Create Acoount</Link>
              </li>
            </ul>
            <Route exact path="/granated.js" component={granated.default} />
            <Route path="/registro" component={granated.default} />
            
          </div>
        </Router>
      </header>

    </div>

  );

}


//export default Login;
