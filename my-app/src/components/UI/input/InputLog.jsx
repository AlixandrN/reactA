// InputLog.jsx
import React from 'react'
import s from './Input.module.css'

const InputLog = React.forwardRef((props, ref) => {
  return (
    <input
      type='text'
      placeholder='login'
      ref={ref}
      className={s.inputLog}
      {...props} />
  );
});

export default InputLog
