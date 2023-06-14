import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDB } from '../conection/fetch'
import Button from './iu/Button'

const LoginForm = () => {

  const navigate = useNavigate()

  const [datos, setDatos] = useState({
    email: "",
    password: "",
    error: false,
    errorMessage: ""
  })

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  } 


  function translateMessage(errorMessage){
    switch (errorMessage) {
      case "Email and password are required":
        return "Correo y contraseña son obligatorios."
      case "Cannot find user":
        return "Usuario no registrado."
        case "Incorrect password":
        return "Contraseña incorrecta."
      case "Email format is invalid":
        return "Correo inválido."
      default:
        return "Error con la conexion a la BD"
    }
  }

  const handleSendForm = e => {
    e.preventDefault()

      fetchDB("login", "POST", {
        "email": datos.email,
        "password": datos.password
      })

      .then(data => {
        if (typeof data === "object") {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('user', JSON.stringify(data));
          const usuari=data.user.role

   console.log("data",usuari)
          if(usuari==="admin") navigate("/management")
          if(usuari==="chef") navigate("/chef")
          if(usuari==="waiter") navigate("/waiter")
          

          setDatos({
            ...datos,
            error: false,
            errorMessage: "",
          })

        } else {
          setDatos({
            ...datos,
            error: true,
            errorMessage: translateMessage(data)
          })
        }
      })

  }

  return (
    <form className="formulario" action="">
      <input 
        className="input" 
        type="email" 
        placeholder="Digite su e-mail"
        name="email"
        value={datos.email}
        onChange={handleChange}
        data-testid= "login-email-input"
      />
      <input 
        className="input" 
        type="password" 
        placeholder="Digite su contraseña"
        name="password"
        value={datos.password}
        onChange={handleChange}
      />
      <button
        className="btn-transparent"
        type="submit" 
        onClick={handleSendForm}
      >
        <Button 
          type="submit"
          color={"btn-pink"} 
          value={"Iniciar Sesión"} 
        />
      </button>
       <p  className='text-error' data-testid= "login-error-message">
        {
          datos.errorMessage
        }
      </p>
    </form>
  )
}

export default LoginForm