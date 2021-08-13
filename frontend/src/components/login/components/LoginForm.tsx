import React, { FC } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
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
    <Form>
      {inputs.map((input) => (
        <div key={input.name} className="m-3">
          <label
            aria-describedby={input.errorId}
            className={`input title d-block ${input.name}`}
            htmlFor={input.inputId}
          >
            {input.label}
          </label>
          <Field
            id={input.inputId}
            type={input.name}
            name={input.name}
            className="input body"
            placeholder={input.placeholder}
          />
          <div id={input.errorId}>
            <ErrorMessage
              name={input.name}
              component="div"
              className="text-danger"
            />
          </div>
        </div>
      ))}
      <div>
        <Button
          variant="primary"
          className="m-1"
          type="submit"
          disabled={isSubmitting}
        >
          LOG IN
        </Button>
      </div>
    </Form>
  </div>
);

export default LoginForm;
