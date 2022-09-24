import React from "react";
import s from "./MovieCard.module.css";
import { useContext } from "react";
import ThemeContext from "../../context";

const MovieCard = (props) => {
  const { modalVisible, setModalVisible } = useContext(ThemeContext);
  return (
    <div
      className={s.item}
      onClick={(e) => {
        setModalVisible(true);
        props.modalWinSet(e);
      }}
      data-id={props.elNumber - 1}
    >
      <div>Movie № {props.elNumber}</div>
      <div> {props.item.Title}</div>
      <img src={props.item.Poster} />
      <button
        className={s.button}
        onClick={(e) => {
          setModalVisible(true);
          props.modalWinSet(e);
        }}
        data-id={props.elNumber - 1}
      >
        <div className={s.text}> Подробнее </div>
      </button>
    </div>
  );
};
export default MovieCard;
