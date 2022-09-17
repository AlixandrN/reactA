import React from 'react'
import Button1 from '../UI/buttons/Button1'
import InputLog from '../UI/input/InputLog'
import InputPassword from '../UI/input/InputPassword'
import s from './Signin.module.css'

function Signin(props) {
  return (
    <div className={s.page} >
        Signin PAGE
        <br/>
        Для входа в учетную запись необходимо ввести  <br/>
        логин и пароль 
        <br/>
        
        <form>
          
          <InputLog ref={props.refLogin} />
          <InputPassword ref={props.refPassword} />
          <div>

          <Button1 onClick={props.callBack}>войти</Button1>
          
          </div>
          
        </form>
    </div>
  )
}

export default Signin
