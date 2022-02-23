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
  let res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movies?show_id=${show_id}`
  );
  return await res.json();
};

const movie = proxy<{
  id: string;
  loading: boolean;
  data: Promise<IMovie>;
  setId: (id: string) => void;
}>({
  id: "",
  loading: false,
  data: getMovie("black_widow_2021"),
  setId: (id: string) => {
    movie.data = getMovie(id);
  },
});

const useMovie = (show_id: string) => {
  const { setId, data, loading } = useSnapshot(movie);

  useEffect(() => {
    setId(show_id);
  }, [show_id, setId]);
  return { data, loading };
};

export default useMovie;
