import React, { FC } from "react";
import { Form, Field, ErrorMessage } from "formik";
import Loader from "./Loader";
import PostSubmit from "./PostSubmit";
import { inputs } from "../utils/FormHelpers";

interface LoginFormProps {
  isSubmitting: boolean;
  messageFromServer: string;
  setMessageFromServer: (msg: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  isSubmitting,
  messageFromServer,
  setMessageFromServer,
}) => (
  <div>
    {isSubmitting && <Loader />}
    {!!messageFromServer && (
      <PostSubmit
        messageFromServer={messageFromServer}
        setMessageFromServer={setMessageFromServer}
      />
    )}
    <h1>Login form</h1>
    <Form>
      {inputs.map((input) => (
        <div key={input.name}>
          <div className={`input title ${input.name}`}>{input.name}</div>
          <Field
            type={input.name}
            name={input.name}
            className="input body"
            placeholder={input.placeholder}
          />
          <ErrorMessage
            name={input.name}
            component="div"
            className="input error"
          />
        </div>
      ))}
      <div>
        <button type="submit" disabled={isSubmitting}>
          LOG IN
        </button>
      </div>
    </Form>
    <div>
      <button className="forgot-password" onClick={() => false}>
        Forgot password
      </button>
      <div>New user?</div>
      <a href="/signup">Sign up</a>
    </div>
  </div>
);

export default LoginForm;
