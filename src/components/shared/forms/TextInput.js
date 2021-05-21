import React, { Fragment } from "react";

const TextInput = ({ field, form: { touched, errors }, variant, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Fragment>
      <input
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        className={`appearance-none w-100 mt-2 py-2.5 px-3 bg-${
          variant || "gray-100"
        } rounded-md border border-gray-200 text-sm text-gray-900 focus:border-orange-300 disabled:bg-gray-100 focus:outline-none transition ease-in-out duration-300`}
        {...props}
      />
      {hasError && (
        <span className="text-red-600 text-xs mt-1 animate-fade-in-down">
          {errors[field.name]}
        </span>
      )}
    </Fragment>
  );
};

export default TextInput;
