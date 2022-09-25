// resetHistoryLS
export default function resetHistoryLS() {
  if (
    localStorage.getItem("member") !== null &&
    localStorage.getItem("member") !== "null"
  ) {
    const member = JSON.parse(localStorage.getItem("member"));

    if (
      localStorage.getItem("history") !== null &&
      localStorage.getItem("history") !== "null"
    ) {
      let historyArr = JSON.parse(localStorage.getItem("history"));

      if (historyArr.some((el) => el.member === member)) {
        let index = historyArr.findIndex((el) => el.member === member);
        historyArr[index]["searchHistory"] = [];
        localStorage.setItem("history", JSON.stringify(historyArr));
      }
    }
  }
}
