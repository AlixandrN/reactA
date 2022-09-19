import React from "react";
import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import ButtonNext from "../UI/buttons/ButtonNext";
import Select1 from "../UI/select/Select1";
import MovieCard from "./MovieCard";
import s from "./MovieList.module.css";

const MovieList = (props) => {
  const [selectedSort, setSelectedSort] = useState("");
  const sortMovies = (sort) => setSelectedSort(sort);
  const sortedMovies = useMovies(props.items, selectedSort);

  //pagination buttons
  let statusNextBtn = false;
  let statusPrevBtn = false;
  if (props.currentPage === 1) {
    statusPrevBtn = true;
  }
  if (
    props.currentPage === Math.ceil(props.totalItems / 10) ||
    props.totalItems === 0
  ) {
    statusNextBtn = true;
  }

  return (
    <div className={s.wrappList}>
      <div>
        <Select1
          value={selectedSort}
          onChange={(e) => sortMovies(e)}
          options={[
            { value: "Year", name: "по году" },
            { value: "Title", name: "по имени" },
          ]}
          defaultValue="сортировка"
        />
      </div>

      <div className={s.title}>
        <ButtonNext func={props.decrement} status={statusPrevBtn}>
          prev
        </ButtonNext>
        search results: {props.totalItems}
        <br />
        current page: {props.currentPage}
        <ButtonNext func={props.increment} status={statusNextBtn}>
          next
        </ButtonNext>
      </div>

      <div className={s.wrappFilms}>
        {sortedMovies.map((el, index) => (
          <MovieCard
            item={el}
            elNumber={index + 1}
            key={index}
            modalWinSet={props.modalWin}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
