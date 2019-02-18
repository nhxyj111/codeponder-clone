import { registerSchema } from "@codeponder/common";
import { Field, Formik } from "formik";
import Router from "next/router";
import { Button, Form } from "semantic-ui-react";
import { RegisterMutationComponent } from "../components/apollo-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/formik-fields/InputField";
import Layout from "../components/Layout";
import { normalizeErrors } from "../utils/normalizeErrors";

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default () => (
  <Layout>
    <RegisterMutationComponent>
      {mutate => (
        <Formik<FormValues>
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={async (input, { setErrors, setSubmitting }) => {
            const response = await mutate({
              variables: { input }
            });
            if (
              response &&
              response.data &&
              response.data.register.errors &&
              response.data.register.errors.length
            ) {
              setSubmitting(false);
              return setErrors(normalizeErrors(response.data.register.errors));
            } else {
              Router.push("/login");
            }
          }}
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
      )}
    </RegisterMutationComponent>
  </Layout>
);
