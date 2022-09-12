import React from 'react'
import ButtonNext from '../UI/buttons/ButtonNext'
import MovieCard from './MovieCard'

import s from './MovieList.module.css'


const MovieList = (props) => {

  let statusNextBtn = false;
  let statusPrevBtn = false;
  if (props.currentPage === 1) { statusPrevBtn = true };
  if (props.currentPage === Math.ceil(props.totalItems / 10) ||
    props.totalItems === 0) { statusNextBtn = true };

  // function modalWinFunc (e) {
  //   let id = e.currentTarget.dataset.id
  //   console.log('id=', id)
  //   console.log('film:', props.items[id])
  // }

  return (
    <div className={s.wrappList}>

      <div className={s.title} >
        <ButtonNext func={props.decrement} status={statusPrevBtn} >prev</ButtonNext>
        search results: {props.totalItems}
        <br />
        current page: {props.currentPage}
        <ButtonNext func={props.increment} status={statusNextBtn} >next</ButtonNext>
      </div>

      <div className={s.wrappFilms}>
        {props.items.map((el, index) =>
          <MovieCard
            item={el}
            number={index + 1}
            key={index}
            f={props.modalWin}
          />
        )}
      </div>

    </div>
  )
}

export default MovieList