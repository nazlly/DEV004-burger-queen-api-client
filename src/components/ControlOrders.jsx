import React from 'react'
import { useOrders } from '../context/orders/OrdersContext'


const ControlOrders = () => {

  const { 
    orders,
    finishOrder,
  } = useOrders()

  return (
    <>

      {
        // eslint-disable-next-line array-callback-return
        orders && orders.map(order => {
          if(order.status === "delivering") return (
          <div key={order.id} className="columna-md-50 contenedor-resumen">
            <div className="menu">
              <div className="table">
                <div className="fila base user-chef">Cliente: {order.client} </div>

            {  
            order.products.map ((product, id) => (
                <div key={id} className="fila">
                  <div className="columna item-columna-resumen">
                    {product.product.name}
                  </div>
                  <div className="columna precio-columna-resumen">
                    {product.qty}
                  </div>
                </div> 
            ))
            }
              </div>
            </div>
              <input
                className="input btn-confirmar" 
                type="submit" 
                value="Entregado" 
                onClick={ () => finishOrder(order.id)}
              />
          </div>
        )})
      }
    </>
    )
}

export default ControlOrders