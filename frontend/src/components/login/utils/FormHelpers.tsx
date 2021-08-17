import * as Yup from "yup";
// import { getFromStorage, setInStorage } from "./storage";
export const inputs = [
  {
    errorId: "id-login-email-error",
    inputId: "id-login-email-input",
    label: "EMAIL",
    name: "email",
    placeholder: "user@gmail.com",
  },
  {
    errorId: "id-login-password-error",
    inputId: "id-login-password-input",
    label: "PASSWORD",
    name: "password",
    placeholder: "******",
  },
];

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(21, "Password is too large")
    .required("Required"),
});

export const submitLogin = (
  values: unknown,
  { setSubmitting }: { setSubmitting: (bool: boolean) => void },
  setMessageFromServer: (msg: string) => void
): void => {
  const url = "http://localhost:8000/api/v1/users/auth/login/";
  const params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };

  fetch(url, params)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          setMessageFromServer("Bad request");
          break;
        default:
          setMessageFromServer(`ERROR: ${response.status}`);
          return;
      }
    })
    .then((res) => {
      if (res) {
        alert(`key: ${res.key}`);
        // setInStorage("sessionId", { token: res.key });
        // window.location.href = "/";
      } else {
        // setMessageFromServer(`ERROR: ${res.status}`);
      }
      setSubmitting(false);
    })
    .catch((reason) => {
      // eslint-disable-next-line no-console
      console.error(reason);
      setMessageFromServer("Please try again later.");
      setSubmitting(false);
      return;
    });
};

export const submitLogout = (): void => {
  /*
  const tokenItem = getFromStorage("sessionId");
  if (tokenItem && tokenItem?.token) {
    const { token } = tokenItem;
    const url = `/api/logout?token=${token}`;

    // eslint-disable-next-line no-console
    fetch(url).then(console.warn).catch(console.error);
  }
  */
  alert("log out");
};
