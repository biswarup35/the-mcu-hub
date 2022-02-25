import { proxy } from "valtio";

const getComments = async (parentId: string) => {
  let res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/comments/${parentId}`
  );
  return await res.json();
};

const comments = proxy({
  parentId: "4ce4611bdb",
  comments: getComments("4ce4611bdb"),
  setParentId: (parentId: string) => {
    comments.comments = getComments(parentId);
    console.log(comments.comments);
  },
  update: false,
  toggleUpdate: () => {
    comments.update = !comments.update;
  },
});

export const commentBox = proxy({
  show: true,
  hide: () => {
    commentBox.show = false;
  },
  showing: () => {
    commentBox.show = true;
  },
});

export default comments;
