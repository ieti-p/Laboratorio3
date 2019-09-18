import React from 'react';
import './login.css';


function datosUsuarios(props){
  return(
    <div id="hello">{props.mytext}</div>
  )
}
//export default function granated() {
  function granated() {

  return (

    <div className="login" text-justify="inter-word" >

      <header className="login-header" >

        <div>Ingreso exitoso<datosUsuarios mytext="Bienvenido pepito"/></div>      
        
      </header>
    </div>
   
  );

}
export default granated;