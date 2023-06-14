import React from 'react'
import { useOrders } from '../context/orders/OrdersContext'

const Factura = () => {

  const { order, confirmOrder, cleanOrder  } = useOrders()

  let totalFactura = 0

  return (
    <div className="columna-md-50 contenedor-resumen">
      <div className="menu">
        <div className="table">
          <div className="fila base resumen">
            <div className="columna item-columna-resumen">Items</div>
            <div className="columna precio-columna-resumen">Precio</div>
            <div className="columna cantidad-columna-resumen">Cantidad</div>
            <div className="columna total-columna-resumen">Total</div>
          </div>

        {
          order?.products?.map((product, i) => {

            const totalProducto = product?.product?.price * product?.qty || 0
            totalFactura += totalProducto

            return (
              <div key={i} className="fila">
                <div className="columna item-columna-resumen">
                  {product.product.name}
                </div>
                <div className="columna precio-columna-resumen">
                  ${product.product.price}
                </div>
                <div className="columna cantidad-columna-resumen">
                  <p>{product.qty}</p>
                </div>
                <div className="columna total-columna-resumen">
                  ${totalProducto}
                </div>
              </div>
            )
          })
        }

        <div className="fila">
          <div className="columna item-columna-resumen"></div>
          <div className="columna precio-columna-resumen"></div>
          <div className="columna cantidad-columna-resumen">
            <p>Total</p>
          </div>
          <div className="columna total-columna-resumen">${totalFactura}</div>
          </div> 
        </div>
      </div>
      <input 
        onClick={
          ()=>{
            confirmOrder()
            cleanOrder()
          } 
        }
        className="input btn-confirmar" 
        type="submit" 
        value="Confirmar Pedido" 
      />

      <input onClick={()=>cleanOrder()} className="input btn-cancelar" type="submit" value="Cancelar Pedido"/>
          </div>
  )
}

export default Factura