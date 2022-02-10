import { proxy, useSnapshot } from "valtio";
import axios from "axios";
const state = proxy({
  data: axios.get(`${process.env.REACT_APP_BASE_URL}/shows`),
});
const useMovies = () => {
  const {
    data: {
      data: { movies, tv },
    },
  } = useSnapshot(state);
  return { movies, tv };
};

export default useMovies;
