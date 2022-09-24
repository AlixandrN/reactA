//setMemberInLS.js
export const setMemberInLS = (store) => (next) => (action) => {
  let result = next(action);

  let currentLogin = result.payload.name;
  if (
    currentLogin === "member" ||
    currentLogin === "history" ||
    currentLogin === "users"
  ) {
    alert("такой логин зарезервирован");
  }

  return result;
};
