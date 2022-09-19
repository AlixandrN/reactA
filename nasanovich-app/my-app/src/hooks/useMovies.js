// custom gook useMovies
import { useMemo } from "react";

export const useMovies = (movies, selectedSort) => {
  const sortedMovies = useMemo(() => {
    if (selectedSort) {
      return [...movies].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return movies;
    }
  }, [movies, selectedSort]);

  return sortedMovies;
};
