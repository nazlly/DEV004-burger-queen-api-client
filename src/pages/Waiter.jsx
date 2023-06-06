import React from 'react'
import Comanda from '../components/Comanda'
import Factura from '../components/Factura'
import Header from '../components/Header'

const Waiter = () => {
  return (
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

export default Waiter