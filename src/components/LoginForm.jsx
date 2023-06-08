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
      case "Password is too short":
        return "La contraseña debe contener al menos 6 caracteres."
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

    /* 
      1. Capturar los datos de los input - ok
      2. Validar los datos - ok
      3. Fetch a la bd - ok
      4. Capturar respuesta afirmativa - ok
      5. Guardar el tocken en localstorage - ok
      6. Redireccionar de acuerdo al rol - ok
      7. Guardar el error de validacion en el state - ok
      8. Capturar el error de la bd - ok
      9. Guardar error en español en el state  - ok
      10. Validar si tiene token activo enviar a la pagina del rol respectivo -ok
    */

      fetchDB("login", "POST", {
        "email": datos.email,
        "password": datos.password
      })

      .then(data => {
        if (typeof data === "object") {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('user', JSON.stringify(data.user));
  
          if(data?.user?.roles?.admin) navigate("/management")
          if(data?.user?.roles?.chef) navigate("/chef")
          if(data?.user?.roles?.waiter) navigate("/waiter")

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
      <p className='text-error'>
        {
          datos.errorMessage
        }
      </p>
    </form>
  )
}

export default LoginForm