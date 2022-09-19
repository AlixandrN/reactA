import React from "react";
import s from "./Signup.module.css";
import Button1 from "../UI/buttons/Button1";
import InputLog from "../UI/input/InputLog";
import InputPassword from "../UI/input/InputPassword";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const checkInputs = (e) => {
    e.preventDefault();
    if (
      props.refLogin.current.value === "" ||
      props.refPassword.current.value === ""
    ) {
      alert("все поля должны быть заполнены");
    } else {
      props.callBack(e);
      navigate("/");
    }
  };
  const navigate = useNavigate();
  return (
    <div className={s.page}>
      Signup PAGE
      <br />
      Введите логин и пароль для создания пользователя
      <br />
      <form>
        <InputLog ref={props.refLogin} />
        <InputPassword ref={props.refPassword} />

        <div>
          <Button1
            onClick={(e) => {
              checkInputs(e);
            }}
            name="создать пользователя"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
