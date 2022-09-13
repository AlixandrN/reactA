import React from 'react'
import s from './MovieCard.module.css'

const MovieCard = (props) => {
  return (
    <div className={s.item} >
      <div>Movie № {props.elNumber}</div>
      <div> {props.item.Title}</div> 
      <img src={props.item.Poster} />
      <button onClick={props.modalWinSet} data-id={props.elNumber - 1} > Подробнее</button>
    </div>
  )
}
export default MovieCard

// Свойства Title и Poster взяты из API