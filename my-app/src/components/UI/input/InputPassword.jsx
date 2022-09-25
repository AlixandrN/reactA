// InputPas.jsx
import React from 'react'
import s from './Input.module.css'

const InputPas = React.forwardRef((props, ref) => {
  return (
    <input
      type='text'
      placeholder='password'
      ref={ref}
      className={s.inputPas}
      {...props} />
  );
});

export default InputPas
