import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Chef = () => {

  const [showPage, setShowPage] = useState(false)
  const navigate = useNavigate()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('user')) {

      const {roles} = JSON.parse(localStorage.getItem("user"))
      console.log(roles)

      if(localStorage.getItem("token") &&  roles.chef){
        setShowPage(true)
      } else {
        if (roles.waiter) navigate("/waiter")
        if (roles.admin) navigate("/management")
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
            <h1>Pagina de Chef</h1>
          </>
        )
      }
    </>
  )
}

export default Chef