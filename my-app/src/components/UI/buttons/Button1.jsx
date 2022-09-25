import React from 'react';
import classes from './Button1.module.css'

function Button1({ children, isDisabled, ...props }) {
  return (
    <button
      disabled={isDisabled}
      className={classes.btn1}
      {...props}
    >
      {children}
      {props.name}
    </button>
  )
}

export default Button1
