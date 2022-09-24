//Signup page
import React from "react";
import s from "./Signup.module.css";
import Button1 from "../UI/buttons/Button1";
import InputLog from "../UI/input/InputLog";
import InputPassword from "../UI/input/InputPassword";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";

function Signup(props) {
  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const [password, setPassword] = useState("");

  function LoginMessage() {
    if (log.length > 10) {
      throw new Error("more then ten");
    } else if (log.length > 0) {
      return <p className={s.message}> "login подходит" </p>;
    }
  }

  function PasswordMessage() {
    if (password.length > 10) {
      throw new Error("more then ten");
    } 
    else if (password.length > 0) {
      return <p className={s.message}> "password подходит" </p>;
    }
  }

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

  return (
    <div className={s.page}>
      Signup PAGE
      <br />
      Введите логин и пароль для создания пользователя
      <br />
      <form>
        <InputLog
          value={log}
          ref={props.refLogin}
          onChange={(e) => setLog(e.target.value)}
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[log]}>
          <LoginMessage />
        </ErrorBoundary>

        <InputPassword
          value={password}
          ref={props.refPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[password]}>
          <PasswordMessage />
        </ErrorBoundary>
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
