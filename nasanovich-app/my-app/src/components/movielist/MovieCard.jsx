import React from "react";
import s from "./MovieCard.module.css";

const MovieCard = (props) => {
  
  return (
    <div
      className={s.item}
      onClick={props.modalWinSet}
      data-id={props.elNumber - 1}
    >
      
      <div>Movie № {props.elNumber}</div>
      <div> {props.item.Title}</div>
      <img src={props.item.Poster} />
      <button
        className={s.button}
        onClick={props.modalWinSet}
        data-id={props.elNumber - 1}
      >
        <div className={s.text}> Подробнее </div>
      </button>
    </div>
  );
};
export default MovieCard;
