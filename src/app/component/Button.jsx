import React from 'react'

export const Button = ({className,children}) => {
  return (
    <Button className={`text-white ${className}`}>{children}</Button>
  )
}
