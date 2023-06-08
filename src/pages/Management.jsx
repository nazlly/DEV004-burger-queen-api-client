import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Management = () => {

  const [showPage, setShowPage] = useState(false)
  const navigate = useNavigate()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const {roles} = JSON.parse(localStorage.getItem("user"))

      if(localStorage.getItem("token") &&  roles.admin){
        setShowPage(true)
      } else {
        if (roles.waiter) navigate("/waiter")
        if (roles.chef) navigate("/chef")
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