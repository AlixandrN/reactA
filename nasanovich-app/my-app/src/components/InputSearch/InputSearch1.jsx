import React from 'react'

const InputSearch1 = (props) => {
  return (
    <input 
    type='text'
    placeholder='search movie'
    onChange={e=>props.searchFunc(e.target.value)}
    />
    
    
  )
}

export default InputSearch1