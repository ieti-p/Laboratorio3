import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './login.css';
//npm install autosuggest-highlight --save
const useStyles = makeStyles(theme => ({
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
        <div>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Loggin
      </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Create Acount
      </Button>
        </div>
      </header>

    </div>

  );

}


//export default Login;
