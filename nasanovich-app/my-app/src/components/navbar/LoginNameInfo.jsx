//LoginNameInfo.jsx
import React from "react";
import { useSelector } from "react-redux";
import s from "./Navbar.module.css";

function LoginNameInfo() {
  const currentName = useSelector((state) => state.user.first);

  return (
    <div>
      Вход не выполнен
      <br />
      <div className={s.login}> {currentName} </div>
    </div>
  );
}

export default LoginNameInfo;
