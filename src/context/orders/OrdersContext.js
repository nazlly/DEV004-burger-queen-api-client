import React, { createContext, useContext, useState } from "react"

const OrdersContext = createContext()

export const OrdersProvider = ({children}) => {

  const [order, setOrder] = useState({
    "userId": null,
    "client": "",
    "products": []
  })

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
      
      setOrder({
        ...order,
        products: order.products.map((p) => {
          if(p.productId === product.id) {
            return {
              productId: p.productId,
              qty: operation === "sum" ? 
                p.qty + 1 
              : p.qty >= 1 ? p.qty - 1 : 0,
              product: p.product
            }
          } 
          return p
        })
      })
    }
  }

  const confirmOrder = () => {
    setOrders([
      ...orders,
      order
    ])
  }

  return (
    <OrdersContext.Provider
      value = {{
        orders,
        order,
        setClient,
        setUserId,
        setProduct,
        confirmOrder
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => {
  return useContext(OrdersContext)
}