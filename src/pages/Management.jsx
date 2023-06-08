import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Management = () => {

  const [showPage, setShowPage] = useState(false)
  const navigate = useNavigate()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const usuario = JSON.parse(localStorage.getItem("user"))

      if(localStorage.getItem("token") &&  usuario.user.role ==="admin"){
        setShowPage(true)
      } else {
        if (usuario.user.role ==="waiter") navigate("/waiter")
        if (usuario.user.role ==="chef") navigate("/chef")
      }
    }else {
      navigate("/login")
    }
  })
  
  return (
    <>
      {
        showPage && (
          <>
            <Header rol={"Management"}/>
            <div className="container">
              admin
            </div>
          </>
        )
      }
    </>
  )
}

export default Management