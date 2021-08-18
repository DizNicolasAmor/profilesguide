import React, { FC } from "react";

interface PostSubmitProps {
  messageFromServer: string;
}

const PostSubmit: FC<PostSubmitProps> = ({ messageFromServer }) => (
  <div>
    <div aria-live="assertive" aria-atomic role="alert">
      {messageFromServer && (
        <div className="m-3 text-danger">Login failed. {messageFromServer}</div>
      )}
    </div>
  </div>
);

export default PostSubmit;
