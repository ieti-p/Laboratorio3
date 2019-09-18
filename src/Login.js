import React from 'react';

import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import './login.css';
import granated from './granated';
//import granated from './granated';
//import Typography from '@material-ui/core/Typography';
import Cual from './Cual';

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



        <Router>
          <div>
            <ul>
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
            
          </div>
        </Router>
      </header>

    </div>

  );

}


//export default Login;
