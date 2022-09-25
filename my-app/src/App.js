import React, { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signin from "./components/signinpage/Signin";
import Signup from "./components/signuppage/Signup";
import Header from "./components/header/Header";
import Favorites from "./components/favoritespage/Favorites";
import MovieList from "./components/movielist/MovieList";
import ModalWin from "./components/modalwindow/ModalWin";

function App() {
  const History = lazy(() => import("./components/historypage/History"));
  const [isLogined, setIsLogined] = useState(false);
  function setLoginTrue() {
    setIsLogined(true);
  }
  function setLoginFalse() {
    setIsLogined(false);
  }

  //MEMBER
  const [member, setMember] = useState("");
  const [isMember, setIsMember] = useState(false);

  const resetMember = () => {
    setMember("");
    setIsMember(false);
    localStorage.setItem("member", null);
  };

  const [films, setFilms] = useState([
    // {
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    //   Title: "C 2011 Harry Potter and the Deathly Hallows: Part 2",
    //   Type: "movie",
    //   Year: "2011",
    //   imdbID: "tt1201607",
    // },
  ]);
  const [totalFilms, setTotalFilms] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("0");

  useEffect(() => {
    fetchPosts();
    setPage(1);
  }, [query]);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const curMem = localStorage.getItem("member");
    if (curMem != "null" && curMem != null) {
      const currentMember = JSON.parse(localStorage.getItem("member"));
      setMember(currentMember);
      setIsMember(true);
    }
  }, []);

  const [currentFilmID, setCurrentFilmID] = useState(null);

  //API
  const key1 = "71ce4062";
  async function fetchPosts() {
    const way = `https://www.omdbapi.com/?s=${query}&apikey=${key1}&page=${page}`;
    const response = await axios.get(way);
    if (response.data.Response === "True") {
      setFilms(response.data.Search);
      setTotalFilms(response.data.totalResults);
    } else {
      setFilms([]);
      setTotalFilms(0);
    }
  }

  const changePagePlus = () => setPage(page + 1);
  const changePageMinus = () => setPage(page - 1);

  const modalWinGivesInfo = (e) => setCurrentFilmID(e.currentTarget.dataset.id);

  return (
    <div className="App">
      <Header
        member={member}
        isMember={isMember}
        changeIsMember={resetMember}
        logiT={setLoginTrue}
        logiF={setLoginFalse}
        isLogined={isLogined}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="signin"
            element={
              <Signin setMemberL={setMember} setIsMemberL={setIsMember} />
            }
          />

          <Route
            path="signup"
            element={
              <Signup setMemberL={setMember} setIsMemberL={setIsMember} />
            }
          />

          <Route path="favorites" element={<Favorites />} />
          <Route path="history" element={<History />} />
        </Routes>
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              query={setQuery}
              items={films}
              totalItems={totalFilms}
              currentPage={page}
              increment={changePagePlus}
              decrement={changePageMinus}
              modalWin={modalWinGivesInfo}
            />
          }
        />
      </Routes>

      <ModalWin currentFilm={films[currentFilmID]} currentMember={member} />
    </div>
  );
}

export default App;
