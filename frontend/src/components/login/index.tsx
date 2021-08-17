import React, { useState, FC } from "react";
import { Formik } from "formik";
import CustomSection from "../common/customSection";
import LoginForm from "./components/LoginForm";
import {
  initialValues,
  validationSchema,
  submitLogin,
} from "./utils/FormHelpers";

const Login: FC = () => {
  const [messageFromServer, setMessageFromServer] = useState("");

  return (
    <CustomSection title="Login Form">
      <div className="text-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) =>
            submitLogin(values, { setSubmitting }, setMessageFromServer)
          }
          render={({ isSubmitting }) => (
            <LoginForm
              isSubmitting={isSubmitting}
              messageFromServer={messageFromServer}
              setMessageFromServer={setMessageFromServer}
            />
          )}
        />
        <div className="mt-3">
          <a href="/reset-password">I forgot my password</a>
        </div>
      </div>
    </CustomSection>
  );
};

export default Login;
