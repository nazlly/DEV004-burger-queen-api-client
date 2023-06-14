import React, { createContext, useContext, useState } from "react"
import { fetchDB } from "../../conection/fetch"

const OrdersContext = createContext()

export const OrdersProvider = ({children}) => {

  const [order, setOrder] = useState({
    "userId": null,
    "client": "",
    "products": [],
    "status": "pending",
    "dateEntry": new Date()
  })

  

  const cleanOrder = () => {
    setOrder({
      ...order,
      "client": "",
      "products": []
    })
  }

  const [orders, setOrders] = useState([])

  const setClient = (client) => {
    setOrder({
      ...order,
      client
    })
  }



  const setUserId = (userId) => {
    setOrder({
      ...order,
      userId
    })
  }

  const setProduct = (product, operation) => {

    const existProduct = order?.products?.filter(p => p.productId === product.id) || []

    if(existProduct.length === 0 && operation === "sum") {
      setOrder({
        ...order,
        products:[ ...order.products, 
            {
              productId: product.id,
              qty: 1,
              product
            }
          ]
      })
    } else {
      if (operation === "less" && existProduct[0]?.qty === 1) {
        setOrder({
          ...order,
          products: order.products.filter( p => p.productId !== product.id )
        })
      } else {
        setOrder({
          ...order,
          products: order.products.map((p) => {
            if (p.productId === product.id) {
                return {
                  productId: p.productId,
                  qty: operation === "sum" 
                  ? p.qty + 1 
                  : p.qty >= 1 
                  ? p.qty - 1 
                  : 0,
                  product: p.product
              }
            } 
            return p
          })
        })
      }
    }

  }

  const removeProductFromOrder = () => {

    const resultado = order.products.filter(product => product.productId >= 1)

    setOrder({
      ...order,
      products: resultado
    })
  }

  const confirmOrder = () => {
    setOrders([
      ...orders,
      order
    ])

    //guardar en BD
    fetchDB("orders", "POST", order, localStorage.getItem("token"))
    .then((resultado) => console.log("Datos enviados: ", resultado))
  }

  

  return (
    <OrdersContext.Provider
      value = {{
        orders,
        order,
        setClient,
        setUserId,
        setProduct,
        confirmOrder,
        cleanOrder,
        removeProductFromOrder
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}


export const useOrders = () => {
  return useContext(OrdersContext)
}