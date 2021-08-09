import React, { useState, FC } from "react";
import { Formik } from "formik";
import LoginForm from "./components/LoginForm";
import {
  initialValues,
  validationSchema,
  submitLogin,
} from "./utils/FormHelpers";

const Login: FC = () => {
  const [messageFromServer, setMessageFromServer] = useState("");

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={(values, { setSubmitting }) =>
        // submitLogin(values, { setSubmitting }, setMessageFromServer)
        onSubmit={submitLogin}
        render={({ isSubmitting }) => (
          <LoginForm
            isSubmitting={isSubmitting}
            messageFromServer={messageFromServer}
            setMessageFromServer={setMessageFromServer}
          />
        )}
      />
    </div>
  );
};

export default Login;
