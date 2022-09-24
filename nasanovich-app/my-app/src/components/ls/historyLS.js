// historyLS
export default function historyLS(query, time) {
  if (
    localStorage.getItem("member") !== null &&
    localStorage.getItem("member") !== "null"
  ) {
    const member = JSON.parse(localStorage.getItem("member"));

    if (
      localStorage.getItem("history") === null ||
      localStorage.getItem("history") === "null"
    ) {
      let historyArr = [];
      historyArr.push({ member, searchHistory: [{ query, time }] });
      localStorage.setItem("history", JSON.stringify(historyArr));
    } else {
      let historyArr = JSON.parse(localStorage.getItem("history"));

      if (historyArr.some((el) => el.member === member)) {
        // member in arr
        let index = historyArr.findIndex((el) => el.member === member);
        historyArr[index]["searchHistory"].push({ query, time });
        localStorage.setItem("history", JSON.stringify(historyArr));
      } else {
        // no member in arr
        historyArr.push({ member, searchHistory: [{ query, time }] });
        localStorage.setItem("history", JSON.stringify(historyArr));
      }
    }
  }
}
