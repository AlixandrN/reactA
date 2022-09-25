//Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Button1 from "../UI/buttons/Button1";
import LoginNameInfo from "./LoginNameInfo";
import s from "./Navbar.module.css";

export default function Navbar(props) {
  if (props.isMember) {
    //вход выполнен
    return (
      <div className={s.wrapp}>
        <div className={s.text}>
          {/* учетная запись */}
          {!props.member && "вход не выполнен"}
          {props.member && `вход выполнил пользователь: ${props.member}`}
        </div>
        <nav>
          <NavLink to="/favorites">
            <Button1 name="Избранное" />
          </NavLink>

          <NavLink to="/history">
            <Button1 name="История" />
          </NavLink>
        </nav>

        <NavLink to="/">
          <Button1
            name="Выход"
            onClick={() => {
              props.changeIsMember();
              props.resetLogPage();
            }}
          />
        </NavLink>
      </div>
    );
  } else {
    if (!props.isLogined) {
      //вход не выполнен и нет попытки регистрации
      return (
        <nav>
          <NavLink to="/signin">
            <Button1 onClick={props.tryLogPage} name="Вход" />
          </NavLink>

          <NavLink to="/signup">
            <Button1 onClick={props.tryLogPage} name="Регистрация" />
          </NavLink>
        </nav>
      );
    } else
      return (
        //вход не выполнен но есть попытка регистрации
        <div className={s.wrapp}>
          <div className={s.text}>
            {/* учетная запись */}
            {!props.member && <LoginNameInfo />}
            {props.member && `вход выполнил пользователь: ${props.member}`}
          </div>

          <nav>
            <NavLink to="/favorites">
              <Button1 name="Избранное" />
            </NavLink>

            <NavLink to="/history">
              <Button1 name="История" />
            </NavLink>
          </nav>

          <Button1 name="Выход" disabled={true} />
        </div>
      );
  }
}
