import React, { Suspense, lazy } from 'react';
import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Signin from './components/signinpage/Signin';
import Signup from './components/signuppage/Signup';
import Header from './components/header/Header';
import Favorites from './components/favoritespage/Favorites';
// import History from './components/historypage/History'; 
import InputSearch1 from './components/UI/input/InputSearch1';
import MovieList from './components/movielist/MovieList';
import ModalWin from './components/modalwindow/ModalWin';
import ModalWinContent from './components/modalwindow/ModalWinContent';
import { useContext } from 'react';
import ThemeContext from './context';

function App() {
  const History = lazy(() => import('./components/historypage/History'));
  const [isLogined, setIsLogined] = useState(false) // was user logined?
  function setLoginTrue() { setIsLogined(true) }
  function setLoginFalse() { setIsLogined(false) }

  const [member, setMember] = useState('');
  const [isMember, setIsMember] = useState(false);
  
  const resetMember = () => {
    console.log('reset member')
    setMember('');
    setIsMember(false);
    localStorage.setItem('member', null);
  };

  const [films, setFilms] = useState([
    // {
    //   Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    //   Title: "C 2011 Harry Potter and the Deathly Hallows: Part 2",
    //   Type: "movie",
    //   Year: "2011",
    //   imdbID: "tt1201607"
    // },
    // {
    //   Poster: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
    //   Title: "B 2001 Harry Potter and the Sorcerer's Stone",
    //   Type: "movie",
    //   Year: "2001",
    //   imdbID: "tt0241527"
    // },
    // {
    //   Poster: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
    //   Title: "A 2021 Harry Potter and the Sorcerer's Stone",
    //   Type: "movie",
    //   Year: "2021",
    //   imdbID: "tt0241527"
    // },
  ])
  const [totalFilms, setTotalFilms] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('0');
  
  useEffect(() => { fetchPosts(); setPage(1) }, [query]);
  useEffect(() => { fetchPosts() }, [page]);

  useEffect(() => {
    const curMem = localStorage.getItem('member');
    if (curMem == 'null' || curMem == null) { console.log('!!!!ВХОД НЕ ВЫПОЛНЕН!!!') }
    else {
      const currentMember = JSON.parse(localStorage.getItem('member'));
      setMember(currentMember);
      setIsMember(true);
    }
  }, []);

  const [currentFilmID, setCurrentFilmID] = useState(null);
  // Ref
  const loginInputRef = useRef();
  const passwordInputRef = useRef();
  //API
  const key1 = '71ce4062';//пока без использования средств скрытия
  async function fetchPosts() {
    const way = `https://www.omdbapi.com/?s=${query}&apikey=${key1}&page=${page}`
    const response = await axios.get(way)
    if (response.data.Response === 'True') {
      setFilms(response.data.Search);
      setTotalFilms(response.data.totalResults)
    }
    else {
      setFilms([]);
      setTotalFilms(0);
    }
  }

  const changePagePlus = () => setPage(page + 1);
  const changePageMinus = () => setPage(page - 1);
 
  const modalWinGivesInfo = e =>setCurrentFilmID(e.currentTarget.dataset.id);

  //Signup function---------------------------------
  function addNewMember(e) {
    e.preventDefault();
    const currentLogin = loginInputRef.current.value;
    const currentPassword = passwordInputRef.current.value;

    if (localStorage.getItem('users') === null) {
      let usersArr = [];
      usersArr.push({ login: currentLogin, password: currentPassword });
      localStorage.setItem('users', JSON.stringify(usersArr));
      // set member
      setMember(currentLogin);
      setIsMember(true);
      localStorage.setItem('member', JSON.stringify(currentLogin));
    } else { //LS is not empty
      let arr = JSON.parse(localStorage.getItem('users'));
      let isMatch = arr.some(el => el['login'] === currentLogin);
      if (isMatch) { alert('такой логин уже существует') }
      else if(currentLogin === 'member' || currentLogin === 'history' || currentLogin === 'users' ) {
        alert('такой логин зарезервирован')
      }
      else { // login is OK (not match)
        arr.push({ login: currentLogin, password: currentPassword })
        localStorage.setItem('users', JSON.stringify(arr));
        // set member
        setMember(currentLogin);
        setIsMember(true);
        localStorage.setItem('member', JSON.stringify(currentLogin));
      }
    }
  }

  //Signin function---------------------------------
  function goToLogin(e) {
    e.preventDefault();
    const currentLogin = loginInputRef.current.value;
    const currentPassword = passwordInputRef.current.value;
    let arr = JSON.parse(localStorage.getItem('users'));
    let isMatch = arr.some(el => el['login'] === currentLogin);
    if (!isMatch) { alert('такого логина нет!') }
    else {
      let person = arr.find(el => el['login'] === currentLogin)
      if (person.password === currentPassword) {
        setMember(currentLogin);
        setIsMember(true);
        localStorage.setItem('member', JSON.stringify(currentLogin));
      } else { alert('неверный пароль') }
    }
  }

  return (
    <div className="App">

      <Header
        member={member}
        isMember={isMember}
        changeIsMember={resetMember}
        logiT={setLoginTrue} //попытка входа
        logiF={setLoginFalse} // отмена попытки входа
        isLogined={isLogined} // нажата "вход" или "регистрация"
      />
      
      <Suspense fallback={<div>Loading...</div>} >
      <Routes>

        <Route path='signin' element={<Signin
          refLogin={loginInputRef}
          refPassword={passwordInputRef}
          callBack={goToLogin}
        />} />

        <Route path='signup' element={<Signup
          refLogin={loginInputRef}
          refPassword={passwordInputRef}
          callBack={addNewMember}
        />} />

        <Route path='favorites' element={<Favorites />} />
        <Route path='history' element={ <History /> }/>

        </Routes>
        </Suspense>
        <Routes>

        <Route path='/' element={<MovieList
              query={setQuery}
              items={films}
              totalItems={totalFilms}
              currentPage={page}
              increment={changePagePlus}
              decrement={changePageMinus}
              modalWin={modalWinGivesInfo}
            /> } />

      </Routes>
      {/* </Suspense> */}

      <ModalWin currentFilm={films[currentFilmID]} currentMember = {member} />

    </div>
  );
}

export default App;
