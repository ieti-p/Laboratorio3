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

function datosUsuarios(props){
  return(
    <div id="hello">{props.mytext}</div>
  )
}
export default function granated() {
//function granated(){





  return (

    <div className="login" text-justify="inter-word" >

      <header className="login-header" >

        <h1>Ingerso exitoso<datosUsuarios mytext="Bienvenido pepito"/></h1>
        <h2></h2>

        <h2>Ingreso exitoso <datosUsuarios mytext="Bienvenido pepito"/></h2>
      </header>
    </div>
   
  );

}

//export default granated;
