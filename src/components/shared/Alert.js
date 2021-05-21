import React from "react";
import classNames from "classnames";

const Alert = ({ message, variant, onDismiss }) => (
  <div
    className={classNames({
      "inline-flex justify-between items-center w-full px-5 py-4 rounded-md mt-5": true,
      "text-red-600 bg-red-100": variant === "error",
      "text-green-600 bg-green-100": variant === "success",
    })}
  >
    <span className="text-sm font-thin mr-8">{message}</span>
    <button
      className="text-2xl font-light leading-none outline-none focus:outline-none"
      onClick={onDismiss}
    >
      ×
    </button>
  </div>
);

export default Alert;
