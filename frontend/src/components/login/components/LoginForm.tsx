import React, { FC } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { Button, Spinner } from "react-bootstrap";
import { inputs } from "../utils/FormHelpers";

interface LoginFormProps {
  isSubmitting: boolean;
  messageFromServer: string;
}

const LoginForm: FC<LoginFormProps> = ({ isSubmitting, messageFromServer }) => {
  const renderErrorMessage = (msg: string) =>
    Boolean(msg) && (
      <div aria-live="assertive" aria-atomic role="alert">
        <div className="m-3 text-danger">Login failed. {msg}</div>
      </div>
    );

  const renderResetPasswordLink = () => (
    <div className="mt-3">
      <a href="/reset-password">I forgot my password</a>
    </div>
  );

  if (isSubmitting) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <div>
      {renderErrorMessage(messageFromServer)}
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
      {renderResetPasswordLink()}
    </div>
  );
};

export default LoginForm;
