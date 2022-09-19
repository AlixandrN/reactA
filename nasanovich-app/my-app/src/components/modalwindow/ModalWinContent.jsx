import React from "react";
import s from "./ModalWinContent.module.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeItem } from "../../redux/actions";

function ModalWinContent(props) {
  const [activeLikeBtn, setActiveLikeBtn] = useState(true);

  useEffect(() => {
    if (props.member) {
      let arr = JSON.parse(localStorage.getItem(props.member));
      let isCoincidence = arr.some((el) => el.imdbID === props.film.imdbID);
      setActiveLikeBtn(isCoincidence);
    }
  }, [props.visible]);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(likeItem(props.member, props.film));
  };

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
      <img src={props.film["Poster"]} />
    </div>
  );
}

export default ModalWinContent;
