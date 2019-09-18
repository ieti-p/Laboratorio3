import React from 'react';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './login.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function granated() {
//function granated(){

  return (

    <div className="login" text-justify="inter-word" >

      <header className="login-header" >

        <h1>Ingerso exitoso</h1>

        <h2>Muerase</h2>
        

        
      </header>

    </div>

  );

}

//export default granated;
