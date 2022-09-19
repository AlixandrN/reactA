import React from "react";
import s from "./ModalWin.module.css";

function ModalWin({ children, visible, setVisible }) {
  const rootClasses = [s.myModal];
  if (visible) {
    rootClasses.push(s.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWin;
