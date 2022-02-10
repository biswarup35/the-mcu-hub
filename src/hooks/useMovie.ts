import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { proxy, useSnapshot } from "valtio";

interface IMovie {
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

const state = proxy({
  loading: true,
  data: {} as IMovie,
});

const useMovie = () => {
  const { show_id = "black_widow_2021" } = useParams();
  const { data, loading } = useSnapshot(state);

  useEffect(() => {
    getMovie(show_id);
  }, [show_id]);
  return { data, loading };
};

export default useMovie;

export const getMovie = async (show_id: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/movies?show_id=${show_id}`
  );
  if (data) {
    state.data = data;
    state.loading = false;
  }
};
