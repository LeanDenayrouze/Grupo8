import React from 'react'
import "./input.css"


function Input(attribute) {
  return ( 
    <input 
    id={attribute.id}
    name={attribute.name}
    type={attribute.type}
    placeholder={attribute.placeholder}
    className={attribute.className}
    maxLength={attribute.maxLength}

    />
  )
}    

export default Input