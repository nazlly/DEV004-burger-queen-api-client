import React, { useState } from 'react'
import Button from './iu/Button'

const Comanda = () => {
  
  const [plates] = useState([
    {
      name: "Cafe Americano",
      price: 5,
      cant: 0
    },
    {
      name: "Cafe con Leche",
      price: 7,
      cant: 0
    },
    {
      name: "Sandwich",
      price: 7,
      cant: 0
    },
    {
      name: "Jugo de Frutas",
      price: 5,
      cant: 0
    },
  ])

  return (
    <div className="columna-md-50 contenedor-platos">
      <div className="saludo">
        <h2>  ¡Bienvenido! </h2>
        <p>Esperamos tengas una magnifica jornada.</p>
      </div>
      <br/>
      <div className="tipo-menu">
        <Button color="btn btn-pink" value="Desayunos"/>
        <Button color="btn btn-green" value="Almuerzos y Cenas"/>
      </div>
      <div className="menu">
        <div className="table">
          <div className="fila base">
            <div className="columna item-columna">Items</div>
            <div className="columna precio-columna">Precio</div>
            <div className="columna cantidad-columna">Cantidad</div>
          </div>

          {
            plates.map((plate, id) => (
              <div key={id} className="fila">
                <div className="columna item-columna">{plate.name}</div>
                <div className="columna precio-columna">${plate.price}</div>
                <div className="columna cantidad-columna">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>

                  <p>{plate.cant}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg>

                </div>
              </div>
            ))
          }

          <div>
            <p className="refran">«Hagas lo que hagas, hazlo bien. Hazlo tan bien que cuando la gente te vea hacerlo quiera volver y verte hacerlo de nuevo, y querrán traer a otros y mostrarles lo bien que lo haces» Walt Disney. 
            </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comanda