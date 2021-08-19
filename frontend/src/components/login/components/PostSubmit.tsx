import React, { FC } from "react";

interface PostSubmitProps {
  messageFromServer: string;
}

const PostSubmit: FC<PostSubmitProps> = ({ messageFromServer }) => (
  <div aria-live="assertive" aria-atomic role="alert">
    {Boolean(messageFromServer) && (
      <div className="m-3 text-danger">Login failed. {messageFromServer}</div>
    )}
  </div>
);

export default PostSubmit;
