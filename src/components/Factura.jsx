import React from 'react'

const Factura = () => {
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

                <div className="fila">
                  <div className="columna item-columna-resumen">Cafe Americano</div>
                  <div className="columna precio-columna-resumen">$5</div>
                  <div className="columna cantidad-columna-resumen">
                  <p>5</p>
                </div>
                <div className="columna total-columna-resumen">$25</div>
              </div>

              <div className="fila">
                <div className="columna item-columna-resumen">Cafe con Leche</div>
                <div className="columna precio-columna-resumen">$7</div>
                <div className="columna cantidad-columna-resumen">
                  <p>3</p>  
                </div>
                <div className="columna total-columna-resumen">$21</div>
              </div>
              <div className="fila">
                <div className="columna item-columna-resumen">Jugo de Frutas</div>
                <div className="columna precio-columna-resumen">$5</div>
                <div className="columna cantidad-columna-resumen">
                  <p>1</p>
                </div>
                <div className="columna total-columna-resumen">$5</div>
              </div> 
              <div className="fila">
                <div className="columna item-columna-resumen"></div>
                <div className="columna precio-columna-resumen"></div>
                <div className="columna cantidad-columna-resumen">
                  <p>Total</p>
                </div>
                <div className="columna total-columna-resumen">$51</div>
              </div> 
        </div>
      </div>
      <input className="input btn-mesa" type="submit" value="Mesas" />
      <ul className="nav">
        <ul className="lista-mesas">
          <li><a href="">Mesa 1</a></li>
          <li><a href="">Mesa 2</a></li>
          <li><a href="">Mesa 3</a></li>
          <li><a href="">Mesa 4</a></li>
        </ul>
      </ul>
      <input className="input btn-confirmar" type="submit" value="Confirmar Pedido" />
      <input className="input btn-cancelar" type="submit" value="Cancelar Pedido" />
          </div>
  )
}

export default Factura