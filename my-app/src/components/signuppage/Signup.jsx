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
import { useDispatch } from "react-redux";
import { setFirst } from "../features/user/userSlice";
import { setMember } from "../features/memberSlice";

function Signup({ setMemberL, setIsMemberL }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const [password, setPassword] = useState("");

  //Signup function---------------------------------
  function addNewMember() {
    if (localStorage.getItem("users") === null) {
      let usersArr = [];
      usersArr.push({ login: log, password: password });
      localStorage.setItem("users", JSON.stringify(usersArr));
      // set member
      setMemberL(log);
      setIsMemberL(true);
      localStorage.setItem("member", JSON.stringify(log));
    } else {
      //LS is not empty
      let arr = JSON.parse(localStorage.getItem("users"));
      let isMatch = arr.some((el) => el["login"] === log);
      if (isMatch) {
        alert("такой логин уже существует");
      } else if (log === "member" || log === "history" || log === "users") {
      } else {
        // login is OK (not match)
        arr.push({ login: log, password: password });
        localStorage.setItem("users", JSON.stringify(arr));
        // set member
        setMemberL(log);
        setIsMemberL(true);
        localStorage.setItem("member", JSON.stringify(log));
      }
    }
  }

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
    } else if (password.length > 0) {
      return <p className={s.message}> "password подходит" </p>;
    }
  }

  const checkInputs = (e) => {
    e.preventDefault();
    if (log === "" || password === "") {
      alert("все поля должны быть заполнены");
    } else {
      addNewMember();
      navigate("/");
      dispatch(
        setMember({
          name: log,
          password: password,
        })
      );
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
          onChange={(e) => {
            setLog(e.target.value);
            dispatch(setFirst(e.target.value));
          }}
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[log]}>
          <LoginMessage />
        </ErrorBoundary>

        <InputPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[password]}>
          <PasswordMessage />
        </ErrorBoundary>
        <div>
          <Button1
            onClick={(e) => {
              checkInputs(e);
              dispatch(setFirst(""));
            }}
            name="создать пользователя"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
