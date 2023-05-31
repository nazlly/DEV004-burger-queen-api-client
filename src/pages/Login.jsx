import React from 'react'
import logo from '../assets/logo.png'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="fondo-index">
      <div className="container-login">
        <div className="row">
          <div className="picture-logo">
            <img className="logo" src={logo} alt="logo"/>
          </div>
        </div>
        <div className="row">
          <LoginForm/>
        </div>
        <div className="row">
          <p className="authors">By: nazlly palacios</p>
        </div>
      </div>
    </div>
  )
}

export default Login