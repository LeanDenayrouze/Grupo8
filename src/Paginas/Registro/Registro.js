import React from 'react'
import './Registro.css'
import Input from '../../componentes/input/input'
import Button from '../../componentes/button/button'

function Registro() {
  return (
    <div className='RegistroDiv'>
      <h1>Formulario de registro</h1>
      <p>Elija un usuario:</p>
      <Input
      id="user"
      name="user"
      type="text"
      placeholder="Minimo 4 caracteres"
      className="regular-style"
      />
      <p>Correo Electronico:</p>
      <Input
      id="email"
      name="email"
      type="email"
      placeholder="ejemplo@hotmail.com"
      className="regular-style"
      /> 
      <p>Elija una contraseña:</p>
      <Input
      id="pass"
      name="pass"
      type="password"
      placeholder="Minimo 8 caracteres"
      className="regular-style"
      />  
      <br></br>  
      <br></br> 
      <Button
      className="regular-button-style"
      id="submit"
      tittle="Registrarme"
      />
    </div>
  )
}

export default Registro