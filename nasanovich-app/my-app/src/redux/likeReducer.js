// likeReducer.js
import { LIKE } from "./types";

const initialState = {
  data: [],
};

export const likeReducer = (state = initialState, action) => {
  console.log("like reducer >", action);
  console.log("like state >", state);

  switch (action.type) {
    case LIKE:
      console.log("отработал LIKE, member is:", action.person);
      if (localStorage.getItem(action.person) === null) {
        console.log("LS по такому key пуст");
        let arr = [];
        arr.push(action.movie);
        localStorage.setItem(action.person, JSON.stringify(arr));
      } else {
        console.log("LS по такому key существует");
        let arr = JSON.parse(localStorage.getItem(action.person));
        arr.push(action.movie);
        localStorage.setItem(action.person, JSON.stringify(arr));
      }

      return {
        ...state,
        data: [...state.data, { name: action.person, body: action.movie }],
      };

    default:
      return state;
  }
};
