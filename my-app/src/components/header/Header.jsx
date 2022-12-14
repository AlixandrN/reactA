import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import s from './Header.module.css'

function Header(props) {
  return (
    <div className={s.header} >

        <div className={s.logo} 
          onClick={props.logiF} 
        >        
            <NavLink to='/' >
                <div  className={s.imgwrapp} >
                    <div className={s.text} >Movie</div>
                    <img className={s.img}  src="https://www.svgrepo.com/show/216913/video-camera-film.svg" alt="movie" />
                </div>  
            </NavLink>
        </div>    
    
        <Navbar 
          member = {props.member}
          isMember = {props.isMember}
          changeIsMember = {props.changeIsMember}
          tryLogPage = {props.logiT} 
          resetLogPage = {props.logiF}
          isLogined = {props.isLogined} 
        />

    </div>
  )
}

export default Header
