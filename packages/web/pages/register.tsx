import { registerSchema } from "@codeponder/common";
import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/formik-fields/InputField";

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default () => (
  <Formik<FormValues>
    initialValues={{ username: "", email: "", password: "" }}
    onSubmit={() => {}}
    validationSchema={registerSchema}
    validateOnBlur={false}
    validateOnChange={false}>
    {({ errors, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field
          name="username"
          label="Username"
          placeholder="Username"
          component={InputField}
        />
        <Field
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          component={InputField}
        />
        <Field
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          component={InputField}
        />
        <ErrorMessage errors={errors} />
        <Button type="submit">Create Account</Button>
      </Form>
    )}
  </Formik>
);
