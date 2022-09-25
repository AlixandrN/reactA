// HistoryItem.jsx
import React from "react";
import s from "./History.module.css";
import PropTypes from "prop-types";

const HistoryItem = ({ elNumber, item }) => {
  return (
    <div className={s.item}>
      <span>№ {elNumber}</span>
      <span>
        <b>{item.query}</b>
      </span>
      <span>дата {item.time}</span>
    </div>
  );
};

HistoryItem.propTypes = {
  elNumber: PropTypes.number,
  item: PropTypes.object,
};

export default HistoryItem;
