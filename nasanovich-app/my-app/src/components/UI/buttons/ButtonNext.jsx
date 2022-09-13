import React from 'react';
import s from './ButtonNext.module.css'


function ButtonNext({children, func, status, ...props}) {
  return (
    <button 
      {...props}
      className={s.btn}
      disabled = {status} 
      onClick={func}  >
      {children} 
    </button>
  )
}

export default ButtonNext