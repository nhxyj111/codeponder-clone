import { Field, Formik } from "formik";
import Router from "next/router";
import { Button, Form } from "semantic-ui-react";
import { LoginMutationComponent } from "../components/apollo-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/formik-fields/InputField";
import Layout from "../components/Layout";
import { meQuery } from "../graphql/user/query/me";
import { normalizeErrors } from "../utils/normalizeErrors";

export interface FormValues {
  usernameOrEmail: string;
  password: string;
}

export default () => (
  <Layout>
    <LoginMutationComponent>
      {mutate => (
        <Formik<FormValues>
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (input, { setErrors, setSubmitting }) => {
            const response = await mutate({
              variables: { input },
              update: (store, meData) => {
                store.writeQuery({
                  query: meQuery,
                  data: {
                    me: { ...meData.data!.login.user }
                  }
                });
              }
            });
            if (
              response &&
              response.data &&
              response.data.login.errors &&
              response.data.login.errors.length
            ) {
              setSubmitting(false);
              return setErrors(normalizeErrors(response.data.login.errors));
            } else {
              setSubmitting(false);
              Router.push("/home");
            }
          }}
          // validationSchema={registerSchema}
          validateOnBlur={false}
          validateOnChange={false}>
          {({ errors, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="usernameOrEmail"
                label="Username Or Email"
                placeholder="Username Or Email"
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
              <Button disabled={isSubmitting} type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </LoginMutationComponent>
  </Layout>
);
