import React from "react";
import s from "./Favorites.module.css";
import { useEffect, useState } from "react";
import MovieFavoriteCard from "../movielist/MovieFavoriteCard";

function Favorites() {
  let arr = [];
  const currentMember = JSON.parse(localStorage.getItem("member"));
  const membersArr = localStorage.getItem(currentMember);
  if (membersArr !== null && membersArr !== "null") {
    arr = JSON.parse(membersArr);
  } else arr = [];

  const [memberMovies, setMemberMovies] = useState(arr);
  useEffect(() => {
    setMemberMovies(arr);
    console.log('currentMember', currentMember)
  }, []);

  const deleteCard = (e) => {
    const ID = e.currentTarget.dataset.id;
    let wasFilteredArr = arr.filter((el) => el.imdbID !== ID);
    localStorage.setItem(currentMember, JSON.stringify(wasFilteredArr));
    setMemberMovies(wasFilteredArr);
  };

  if (memberMovies.length === 0) {
    return (
      <div className={s.page}>
        <p className={s.text}>Здесь пока ничего нет</p>
      </div>
    );
  } else
    return (
      <div className={s.page}>
        <h3> Избранное </h3>
        <div className={s.content}>
          {memberMovies.map((el, index) => (
            <MovieFavoriteCard
              item={el}
              elNumber={index + 1}
              key={el.imdbID}
              deleteEach={deleteCard}
            />
          ))}
        </div>
      </div>
    );
}

export default Favorites;
