import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import KitchenForm from '../components/KitchenForm'

const Chef = () => {

  const [showPage, setShowPage] = useState(false)
  const navigate = useNavigate()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('user')) {

      const usuario = JSON.parse(localStorage.getItem("user"))
     

      if(localStorage.getItem("token") &&  usuario.user.role === "chef"){
        setShowPage(true)
      } else {
        if (usuario.user.role ==="waiter") navigate("/waiter")
        if (usuario.user.role ==="admin") navigate("/management")
      }
    } else {
      navigate("/login")
    }
  })

  return (
    <>
      {
        showPage && (
          <>
            <Header rol={"Chef"} />
            <KitchenForm/>
          </>
        )
      }
    </>
  )
}

export default Chef