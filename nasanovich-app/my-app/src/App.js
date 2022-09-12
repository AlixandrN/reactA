import React from 'react';
import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/Navbar';

import { NavLink } from 'react-router-dom'
import Signin from './components/signinpage/Signin';
import Signup from './components/signuppage/Signup';
import Header from './components/header/Header';
import Favorites from './components/favoritespage/Favorites';
import History from './components/historypage/History';
import InputSearch1 from './components/InputSearch/InputSearch1';
import MovieList from './components/movielist/MovieList';
import ModalWin from './components/modalwindow/ModalWin';
import ModalWinContent from './components/modalwindow/ModalWinContent';


function App() {

  const [statNav, setNavStat] = useState(false)
  function logiTrue() { setNavStat(true) }
  function logiFalse() { setNavStat(false) }
  // const [isMember, setIsMember] = useState(false)

  const [films, setFilms] = useState([
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1201607"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
      Title: "Harry Potter and the Sorcerer's Stone",
      Type: "movie",
      Year: "2001",
      imdbID: "tt0241527"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg",
      Title: "Harry Potter and the Sorcerer's Stone",
      Type: "movie",
      Year: "2001",
      imdbID: "tt0241527"
    },
  ])
  const [totalFilms, setTotalFilms] = useState(0);
  const [page, setPage] = useState(1);
  const [findString, setFindString] = useState('0');
  useEffect(() => { fetchPosts(); setPage(1) }, [findString]);
  useEffect(() => { fetchPosts() }, [page]);
  //Modal Window
  const [modal, setModal] = useState(false);
  const [currentFilmID, setCurrentFilmID] = useState(null)


  const key1 = '71ce4062';//пока без использования средств скрытия
  async function fetchPosts() {
    const way = `https://www.omdbapi.com/?s=${findString}&apikey=${key1}&page=${page}`
    const response = await axios.get(way)
    console.log(response.data)
    if (response.data.Response === 'True') {
      setFilms(response.data.Search);
      setTotalFilms(response.data.totalResults)
    }
    else {
      setFilms([]);
      setTotalFilms(0);
      console.log('er=', response.data.Error)
    }
  }
  function searchMovieFunc(text) { setFindString(text) }
  const changePagePlus = () => setPage(page + 1)
  const changePageMinus = () => setPage(page - 1)

  function modalWinFunc(e) {
    let id = e.currentTarget.dataset.id
    console.log('id=', id)
    console.log('film:', films[id])
    setCurrentFilmID(id)
    setModal(true)
  }



  return (
    <div className="App">

      <Header
        logiT={logiTrue}
        logiF={logiFalse}
        isNav={statNav} // нажата "вход" или "регистрация"
      />


      <Routes>

        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />

        <Route path='favorites' element={<Favorites />} />
        <Route path='history' element={<History />} />

      </Routes>

      <ModalWin visible={modal} setVisible={setModal} >
        {totalFilms > 0 &&
          films[currentFilmID] &&
          <ModalWinContent film={films[currentFilmID]} />
        }

      </ModalWin>

      <div className='main'>
        <InputSearch1 searchFunc={searchMovieFunc} />
        <MovieList
          items={films}
          totalItems={totalFilms}
          currentPage={page}
          increment={changePagePlus}
          decrement={changePageMinus}
          modalWin={modalWinFunc}
        />
      </div>

    </div>
  );
}

export default App;