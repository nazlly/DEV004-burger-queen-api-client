import React from 'react'

const Button = ({color, value = "", type="button"}) => {
  return (
    <input className={`input ${color}`} value={value} type={type} />
  )
}

export default Button