import React, { useState } from 'react'
import { fetchDB } from '../conection/fetch'
import Button from './iu/Button'

const LoginForm = () => {

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

  const handleSendForm = e => {
    e.preventDefault()
    if (!datos.email || !datos.password) {
      setDatos({
        ...datos,
        error: true,
        errorMessage: "El email y contraseña son obligatorios"
      })
    } else {
      setDatos({
        ...datos,
        error: false,
        errorMessage: "",
      })

      fetchDB("login", "POST", {
        "email": datos.email,
        "password": datos.password
      })
      .then(data => {
        console.log(data)
        console.log(data.accessToken)
        localStorage.setItem('token', data.accessToken);
      })

      console.log(`Vamos a enviar la data: `, datos)
    }
  }



  return (
    <form className="formulario" action="">
      <input 
        className="input" 
        type="text" 
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