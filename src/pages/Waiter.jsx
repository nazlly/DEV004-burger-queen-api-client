import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Comanda from '../components/Comanda'
import Factura from '../components/Factura'
import Header from '../components/Header'

const Waiter = () => {

  const [showPage, setShowPage] = useState(false)
  const navigate = useNavigate()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (localStorage.getItem('user')) {

      const {roles} = JSON.parse(localStorage.getItem("user"))
      if(localStorage.getItem("token") &&  roles.waiter){
        setShowPage(true)
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
            <Header rol={"Mesero"}/>
            <div className="container">
              <div className="row">
                <Comanda />
                <Factura />
              </div>
            </div>
          </>
        )
      }
    </>
    
  )
}

export default Waiter