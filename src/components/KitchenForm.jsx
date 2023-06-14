import { useOrders } from '../context/orders/OrdersContext'

// 1. Traer las ordenes guardadas en la bd mediante el fetch
//1.1 Añadir un producto de ejemplo
// 2. Hacer el  map de las ordenes (pintar orden/orden)
// 3. Destructuramos data recibida de a acuerdo a los requerimientos de nuestra estructura inicial.
const KitchenForm = () => {
  const { 
    orders,
    deliverOrder,
  } = useOrders()
  
  return (
    <>
      <h2>Pendientes</h2>
      {
        orders && orders.map(order => {
          if(order.status === "pending")
           return (
          <div key={order.id} className="columna-md-50 contenedor-resumen">
            <div className="menu">
              <div className="table">
                <div className="fila base user-chef">Cliente: {order.client} </div>
                <div className="fila base resumen">
                  <div className="columna item-columna-resumen">Producto</div>
                  <div className="columna precio-columna-resumen">Cantidad</div>
                </div>
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
                value="Listo para entrega." 
                onClick={ () => deliverOrder(order.id)}
              />
          </div>
        )})
      }) 
      <h2>Entregadas</h2>
      {
        orders && orders.map(order => {
          console.log(order)
          if(order.status === "delivered") return (
          <div key={order.id} className="columna-md-50 contenedor-resumen">
            <div className="menu">
              <div className="table">
                <div className="fila base user-chef">Cliente: {order.client} </div>
                <div className="fila base resumen">
                  <div className="columna item-columna-resumen">Producto</div>
                  <div className="columna precio-columna-resumen">Cantidad</div>
                </div>
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
                <div className="fila">
                  <div className="columna Hora-columna-resumen">
                    <p>Tiempo de Preparación: </p>
                  </div>
                  <div className="columna total-columna-resumen">
                  { Math.floor((new Date(order.dateProcessed) - new Date(order.dateEntry)) / 60000) } min.
                  </div>
                </div> 
              </div>
            </div>
             
          </div>
        )})
      }) 
    </>
    )
  }
export default KitchenForm