import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import {
  CreateCodeReviewInput,
  CreateCodeReviewMutationComponent
} from "../components/apollo-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/formik-fields/InputField";
import Layout from "../components/Layout";
import { normalizeErrors } from "../utils/normalizeErrors";

export interface FormValues {
  usernameOrEmail: string;
  password: string;
}

export default () => (
  <Layout>
    <CreateCodeReviewMutationComponent>
      {mutate => (
        <Formik<CreateCodeReviewInput>
          initialValues={{ numDays: 0, codeUrl: "", techTags: [], notes: "" }}
          onSubmit={async (input, { setErrors, setSubmitting }) => {
            const response = await mutate({
              variables: { input }
            });
            if (
              response &&
              response.data &&
              response.data.createCodeReview.errors &&
              response.data.createCodeReview.errors.length
            ) {
              setSubmitting(false);
              return setErrors(
                normalizeErrors(response.data.createCodeReview.errors)
              );
            } else {
              setSubmitting(false);
              console.log("create code review success");
            }
          }}
          // validationSchema={registerSchema}
          validateOnBlur={false}
          validateOnChange={false}>
          {({ errors, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="numDays"
                label="Number of days"
                placeholder="Number of days"
                component={InputField}
              />
              <Field
                name="codeUrl"
                label="Github Url"
                placeholder="Github Url"
                component={InputField}
              />
              <ErrorMessage errors={errors as any} />
              <Button disabled={isSubmitting} type="submit">
                Create Code Review
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </CreateCodeReviewMutationComponent>
  </Layout>
);
