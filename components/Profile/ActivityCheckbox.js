import React from "react";
import { Field } from "formik";

const ActivityCheckbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className="flex items-center  mb-2">
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          <img
            src={`/img/activity/${props.value}.png`}
            className="h-10 w-auto"
            alt={`${props.value} activity icon`}
          />
        </label>
      )}
    </Field>
  );
};

export default ActivityCheckbox;
