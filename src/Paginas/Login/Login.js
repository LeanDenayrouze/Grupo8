import React from 'react'
import Input from '../../componentes/input/input'
import './Login.css'
import Button from '../../componentes/button/button'

function Login() {
    return (    
      <div className='LoginDiv'>    
      <h1>Bienvenido!</h1>
      <Input
      id="user"
      name="user"
      type="text"
      placeholder="Ingrese su usuario"
      className="regular-style"
      />   
      <br></br>
      <Input
      id="pass"
      name="pass"
      type="password"
      placeholder="Ingrese su contraseña"
      className="regular-style"
      />   
      <br></br>  
      <br></br>  
      
      <Button
      className="regular-button-style"
      id="submit"
      tittle="Iniciar Sesion"
      />
      <br></br> 
      <br></br> 
      <h2>No tienes cuenta? <a href="/register">Registrate aqui</a></h2>
      </div>
   
    )
  }    

export default Login