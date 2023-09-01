import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button
    id={props.id}
    className={props.className}
    >
        {props.tittle}
    </button>

    
  )
}

export default Button