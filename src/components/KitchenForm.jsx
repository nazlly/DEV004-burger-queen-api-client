import React, { useState, useEffect } from 'react'
import { fetchDB } from '../conection/fetch'


// 1. Traer las ordenes guardadas en la bd mediante el fetch
//1.1 Añadir un producto de ejemplo
// 2. Hacer el  map de las ordenes (pintar orden/orden)
// 3. Destructuramos data recibida de a acuerdo a los requerimientos de nuestra estructura inicial.

const KitchenForm = () => {

  const [dataFood, setDataFood]= useState([])

  useEffect(() => {
    fetchDB("orders", "GET", "", localStorage.getItem("token"))
    .then(data => {
      const orderPending = data.filter((order)=>
        order.status === 'pending')
        setDataFood(orderPending)
    })
  }, [])
  
  return (
    <>
      {
        dataFood && dataFood.map(order => (
          <div key={order.id} className="columna-md-50 contenedor-resumen">
            <div className="menu">
              <div className="table">
                <div className="fila base user-chef">Cliente: {order.client} </div>
                <div className="fila base resumen">
                  <div className="columna item-columna-resumen">Producto</div>
                  <div className="columna precio-columna-resumen">Cantidad</div>
                </div>

            {  
            order.products.map (product => (
                <div className="fila">
                  <div className="columna item-columna-resumen">
                    {product.product.name}
                  </div>
                  <div className="columna precio-columna-resumen">
                    {product.qty}
                  </div>
                </div> 
            ))
            }
                <div className="fila">
                  <div className="columna Hora-columna-resumen">
                    <p>Hora</p>
                  </div>
                  <div className="columna total-columna-resumen"></div>
                  {order.dateEntry}
                </div> 
              </div>
            </div>
              <input
                className="input btn-confirmar" 
                type="submit" 
                value="Listo para entrega." 
              />
          </div>
        ))
      }) 
    </>
    )
  }

export default KitchenForm