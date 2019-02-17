import { FormikErrors } from "formik";
import * as React from "react";
import { Message } from "semantic-ui-react";
import { FormValues } from "../pages/register";

export const ErrorMessage: React.FunctionComponent<{
  errors: FormikErrors<FormValues>;
}> = ({ errors }) => {
  const entries = Object.entries(errors);
  if (!entries.length) {
    return null;
  }
  // console.log(entries);
  return (
    <Message negative>
      {entries.map(([path, message]) => (
        <React.Fragment key={`${path}-${message}`}>
          <p>{message}</p>
        </React.Fragment>
      ))}
    </Message>
  );
};
