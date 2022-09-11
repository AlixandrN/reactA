import React from 'react';
import { useEffect, useState, useRef } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/Navbar';


import { NavLink } from 'react-router-dom'
import Signin from './components/signinpage/Signin';
import Signup from './components/signuppage/Signup';
import Header from './components/header/Header';
import Favorites from './components/favoritespage/Favorites';
import History from './components/historypage/History';



function App() {

const [statNav, setNavStat] = useState(false)
function logiTrue() {setNavStat(true)}
function logiFalse() {setNavStat(false)}
// const [isMember, setIsMember] = useState(false)

  return (
    <div className="App">

    <Header
      logiT = {logiTrue}
      logiF = {logiFalse}
      isNav = {statNav} // нажата "вход" или "регистрация"
    />

 
    <Routes>
    
      <Route path='signin' element={ <Signin /> } />
      <Route path='signup' element={ <Signup /> } />

      <Route path='favorites' element={ <Favorites /> } />
      <Route path='history' element={ <History /> } />
      
    </Routes>

   

    </div>
  );
}

export default App;