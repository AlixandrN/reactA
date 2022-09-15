import React from 'react'
import s from './Signup.module.css'
import Button1 from '../UI/buttons/Button1'
import InputLog from '../UI/input/InputLog'
import InputPas from '../UI/input/InputPas'

function Signup(props) {
  return (
    <div className={s.page} >
      Signup PAGE
      <br />
      Введите логин и пароль для создания пользователя
      <br />
      <form>

        <InputLog ref={props.refLogin} />
        <InputPas ref={props.refPassword} />

        <div>

          <Button1 onClick={props.callBack} name='создать пользователя' />

        </div>

      </form>

    </div>
  )
}

export default Signup
