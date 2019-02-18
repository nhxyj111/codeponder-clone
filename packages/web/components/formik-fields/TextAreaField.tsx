import { FieldProps } from "formik";
import { Form, TextArea } from "semantic-ui-react";

export const TextAreaField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}: FieldProps & { label: string }) => {
  const hasError = !!(touched[field.name] && errors[field.name]);
  return (
    <Form.Field error={hasError}>
      <label>{label}</label>
      <TextArea {...field} {...props} />
    </Form.Field>
  );
};
