// ModalWin
import React from "react";
import s from "./ModalWin.module.css";
import { useContext } from "react";
import ThemeContext from "../../context";
import ModalWinContent from "./ModalWinContent";

function ModalWin({ currentFilm, currentMember }) {
  const { modalVisible, setModalVisible } = useContext(ThemeContext);

  const rootClasses = [s.myModal];
  if (modalVisible) {
    rootClasses.push(s.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setModalVisible(false)}
    >
      <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
        <ModalWinContent film={currentFilm} member={currentMember} />
      </div>
    </div>
  );
}

export default ModalWin;
