// MovieFavoriteCard.jsx
import React from "react";
import s from "./MovieCard.module.css";

const MovieFavoriteCard = (props) => {
  return (
    <div className={s.item_favorite}>
      <div>Movie № {props.elNumber}</div>
      <div> {props.item.Title}</div>
      <img src={props.item.Poster} />
      <button
        className={s.button_favorite}
        onClick={props.deleteEach}
        data-id={props.item.imdbID}
      >
        <div className={s.text}> DELETE </div>
      </button>
    </div>
  );
};
export default MovieFavoriteCard;
