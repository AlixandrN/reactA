import React from "react";
import s from "./ModalWinContent.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../context";
import addLikeKey from "../ls/addLikeKey";

function ModalWinContent(props) {
  const [activeLikeBtn, setActiveLikeBtn] = useState(true);
  const { modalVisible } = useContext(ThemeContext);

  useEffect(() => {
    if (props.member) {
      if (
        localStorage.getItem(props.member) === null ||
        localStorage.getItem(props.member) === "null"
      ) {
        setActiveLikeBtn(false);
      } else {
        let arr = JSON.parse(localStorage.getItem(props.member));
        let isMatch = arr.some((el) => el.imdbID === props.film.imdbID);
        setActiveLikeBtn(isMatch);
      }
    }
  }, [modalVisible]);

  const handleChange = () => {
    addLikeKey(props.member, props.film);
  };

  if (props.film) {
    return (
      <div className={s.mwcontent}>
        <div className={s.card_title}>
          <h3>Movie information:</h3>

          <button
            onClick={() => {
              handleChange();
              setActiveLikeBtn(true);
            }}
            disabled={activeLikeBtn}
            className={s.like_btn}
          >
            like
          </button>
        </div>
        <br />
        name: {props.film["Title"]}
        <br />
        year: {props.film["Year"]}
        <br />
        type: {props.film["Type"]}
        <br />
        <img src={props.film["Poster"]} alt='poster'/>
      </div>
    );
  }
}

export default ModalWinContent;
