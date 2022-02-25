import { FC, useState } from "react";
import CommentForm from "./Form";
import { Button, Stack } from "../../components";
import { commentBox } from "../../App/comments";
import { useSnapshot } from "valtio";

interface IComment {
  user: string;
  text: string;
  id: string;
}

const Comment: FC<IComment> = ({ user, text, id }) => {
  // Showing comment form
  const [show, setShow] = useState(false);
  const { hide, showing } = useSnapshot(commentBox);
  const showTrue = () => {
    setShow(true);
    hide();
  };
  const showFalse = () => {
    setShow(false);
    showing();
  };
  return (
    <Stack>
      <h4>{user}</h4>
      <p>{text}</p>
      {!show && (
        <Button
          onClick={showTrue}
          className="py-05 radius-05"
          style={{ width: 80 }}
        >
          Reply
        </Button>
      )}
      {show && (
        <div className="my-2">
          <CommentForm parentId={id} onCancel={showFalse} />
        </div>
      )}
    </Stack>
  );
};

export default Comment;
