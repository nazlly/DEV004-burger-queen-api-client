import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import LoginForm from '../components/LoginForm'

const Login = () => {

  const navigate = useNavigate()

  const [showPage, setShowPage] = useState(false)

  useEffect(()=>{
    if (localStorage.getItem('user')) {
      const roles = JSON.parse(localStorage.getItem("user"))
      const rolee= roles.user.role

console.log("role",rolee)
      if (rolee ==="chef") navigate("/chef")
      if (rolee ==="admin") navigate("/management")
      if (rolee ==="waiter") navigate("/waiter")
    
    }
    setShowPage(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        showPage && (
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
                <p className="authors">By: Nazlly palacioz</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Login