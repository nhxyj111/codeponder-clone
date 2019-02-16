import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "letters and numbers only")
    .min(6)
    .max(30)
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .max(30)
    .required()
});
