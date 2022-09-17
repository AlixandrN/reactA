import React from 'react'
import s from './Input.module.css'

const InputSearch1 = (props) => {
  return (
    <input 
    type='text'
    placeholder='search movie'
    className={s.search1}
    onChange={e=>props.search(e.target.value)}
    />
    
    
  )
}

export default InputSearch1
