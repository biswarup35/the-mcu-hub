import { useEffect } from "react";
import { proxy, useSnapshot } from "valtio";

interface IMovie {
  show_id: string;
  title: string;
  poster: string;
  synopsis: string;
  meta: {
    label: string;
    value: string;
  }[];
  cast: {
    name: string;
    role: string;
    image: string;
  }[];
  photos: string[];
}

const getMovie = async (show_id: string) => {
  let res = await fetch(`${process.env.REACT_APP_BASE_URL}/movie/${show_id}`);
  return await res.json();
};

const movie = proxy<{
  show_id: string;
  loading: boolean;
  data: Promise<IMovie>;
  setShowId: (show_id: string) => void;
}>({
  show_id: "",
  loading: false,
  data: getMovie("black_widow_2021"),
  setShowId: (id: string) => {
    movie.data = getMovie(id);
  },
});

const useMovie = (show_id: string) => {
  const { setShowId, data, loading } = useSnapshot(movie);

  useEffect(() => {
    setShowId(show_id);
  }, [show_id, setShowId]);
  return { data, loading };
};

export default useMovie;
