import { useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import type { IComments } from "../types";

import commentState from "../App/comments";

let getComments = async (id: string): Promise<IComments[]> => {
  let res = await fetch(`${process.env.REACT_APP_BASE_URL}/comments/${id}`);
  return await res.json();
};
const state = proxy<{
  id: string;
  setId: (id: string) => void;
  comments: IComments[];
}>({
  id: "",
  comments: [],
  setId: async (id: string) => {
    state.comments = await getComments(id);
  },
});

const useComments = (id: string) => {
  const { setId, comments } = useSnapshot(state);
  const { update } = useSnapshot(commentState);
  useEffect(() => {
    setId(id);
  }, [setId, id, update]);
  return { comments };
};

export default useComments;
