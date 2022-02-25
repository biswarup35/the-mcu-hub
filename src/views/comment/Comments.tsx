import { FC, Fragment } from "react";
import { Stack } from "../../components";
import Comment from "./Comment";
// import { useComments } from "../../hooks";

import type { IComments } from "../../types";

interface ICommentsProps {
  data: any;
}

const CommentsList: FC<ICommentsProps> = ({ data }) => {
  return (
    <Fragment>
      {data?.map((comment: IComments) => (
        <Stack key={comment.id}>
          <Comment
            user={comment.content.user}
            text={comment.content.text}
            id={comment.id}
          />
          {comment.children && (
            <div className="ml-2">
              <CommentsList data={comment.children} />
            </div>
          )}
        </Stack>
      ))}
    </Fragment>
  );
};

export default CommentsList;
