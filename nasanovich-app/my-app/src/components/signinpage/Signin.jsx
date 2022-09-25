import React from "react";
import { useRef } from "react";
import Button1 from "../UI/buttons/Button1";
import InputLog from "../UI/input/InputLog";
import InputPassword from "../UI/input/InputPassword";
import s from "./Signin.module.css";
import { useNavigate } from "react-router-dom";

function Signin({ setMemberL, setIsMemberL }) {
  const navigate = useNavigate();

  const logRef = useRef();
  const passwordRef = useRef();

  // Signin function---------------------------------
  function goToLogin(e) {
    e.preventDefault();

    let arr = JSON.parse(localStorage.getItem("users"));
    let isMatch = arr.some((el) => el["login"] === logRef.current.value);
    if (!isMatch) {
      alert("такого логина нет!");
    } else {
      let person = arr.find((el) => el["login"] === logRef.current.value);
      if (person.password === passwordRef.current.value) {
        setMemberL(logRef.current.value);
        setIsMemberL(true);
        localStorage.setItem("member", JSON.stringify(logRef.current.value));
      } else {
        alert("неверный пароль");
      }
    }
  }

  return (
    <div className={s.page}>
      Signin PAGE
      <br />
      Для входа в учетную запись необходимо ввести <br />
      логин и пароль
      <br />
      <form>
        <InputLog ref={logRef} />
        <InputPassword ref={passwordRef} />
        <div>
          <Button1
            onClick={(e) => {
              goToLogin(e);
              navigate("/");
            }}
            name="войти"
          />
        </div>
      </form>
    </div>
  );
}

export default Signin;
