//actions.js
import { LIKE } from "./types";


export function likeItem (person, movie)  {
    return {
        type: LIKE,
        person,
        movie
    }
} 
