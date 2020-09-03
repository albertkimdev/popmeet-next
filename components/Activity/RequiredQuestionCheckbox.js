import React from "react";
import { Field } from "formik";

const ActivityCheckbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className="flex items-center ml-2">
          <input
            className="rounded-full"
            type="checkbox"
            {...props}
            checked={field.value}
            onChange={() => {
              form.setFieldValue(props.name, !field.value);
            }}
          />
          <p className="ml-2 text-pgray">Required</p>
        </label>
      )}
    </Field>
  );
};

export default ActivityCheckbox;
