import React from 'react';
import './login.css';


function datosUsuarios(props){
  return(
    <div id="hello">{props.mytext}</div>
  )
}
export default function granated() {

  return (

    <div className="login" text-justify="inter-word" >

      <header className="login-header" >

        <h1>Ingerso exitoso<datosUsuarios mytext="Bienvenido pepito"/></h1>      
        
      </header>
    </div>
   
  );

}
