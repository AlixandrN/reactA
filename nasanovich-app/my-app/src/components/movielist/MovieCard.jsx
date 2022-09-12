import React from 'react'
import s from './MovieCard.module.css'

const MovieCard = (props) => {
  return (
    <div className={s.item} >
      <div>Movie № {props.number}</div>
      <div> {props.item.Title}</div>
      <img src={props.item.Poster} />
      <button onClick={props.f} data-id={props.number - 1} > Подробнее</button>
    </div>
  )
}
export default MovieCard