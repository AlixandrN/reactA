//History.jsx
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import resetHistoryLS from "../ls/resetHistoryLS";
import Button1 from "../UI/buttons/Button1";
import s from "./History.module.css";
import HistoryItem from "./HistoryItem";

function History() {
  let historyArr = [];
  if (
    localStorage.getItem("member") !== null &&
    localStorage.getItem("member") !== "null" &&
    localStorage.getItem("history") !== null &&
    localStorage.getItem("history") !== "null"
  ) {
    const currentMember = JSON.parse(localStorage.getItem("member"));
    let fullHistoryArr = JSON.parse(localStorage.getItem("history"));
    if (fullHistoryArr.some((el) => el.member === currentMember)) {
      const index = fullHistoryArr.findIndex(
        (el) => el.member === currentMember
      );
      historyArr = fullHistoryArr[index]["searchHistory"];
    }
  } else historyArr = [];

  const [memberSearch, setMemberSearch] = useState(historyArr);

  useEffect(() => {
    setMemberSearch(historyArr);
  }, []);

  function clearHistory() {
    setMemberSearch([]);
    resetHistoryLS();
  }

  if (memberSearch.length === 0) {
    return (
      <div className={s.page}>
        <p className={s.text}>Здесь пока ничего нет</p>
      </div>
    );
  } else
    return (
      <div className={s.page}>
        <h3 className={s.title}>История поиска</h3>

        <Button1 onClick={clearHistory} name="Очистить историю" />
        <br />
        <div className={s.item_wrapp}>
          {memberSearch.map((el, index) => (
            <HistoryItem item={el} elNumber={index + 1} key={index} />
          ))}
        </div>
      </div>
    );
}

export default History;
