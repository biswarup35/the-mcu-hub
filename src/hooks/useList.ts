import { watchList } from "../App/store";
import { useSnapshot } from "valtio";
import useMovies from "./useMovies";

const useList = () => {
  const { items, remove, add } = useSnapshot(watchList);
  const { movies } = useMovies();
  const movieList = movies.filter((movie: any) =>
    items.includes(movie.show_id)
  );
  const inWatchList = (id: string) => items.includes(id);

  const count = items.length;

  return { movieList, remove, inWatchList, add, count };
};

export default useList;
