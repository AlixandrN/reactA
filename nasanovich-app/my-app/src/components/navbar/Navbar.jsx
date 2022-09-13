//Navbar.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button1 from '../UI/buttons/Button1';
import s from './Navbar.module.css'



export default function Navbar(props) {

 
  if (!props.isLogined) { 
    return ( 
    <nav>
      <NavLink to='/signin' >
        <Button1  onClick={props.f} name='Вход'/> 
      </NavLink>

      <NavLink to='/signup' >
      <Button1 onClick={props.f} name='Регистрация'/>  
      </NavLink>
    </nav>
    )}
    
    else return (
      <div className={s.wrapp} >

        <div>учетная запись</div>

        <nav>   
          <NavLink to='/favorites' >
            <Button1 name='Избранное'/> 
          </NavLink>

          <NavLink to='/history' >
            <Button1 name='История'/>  
          </NavLink>
        </nav>

        <Button1 name='Выход'/> 
        
      </div>
    )
}
