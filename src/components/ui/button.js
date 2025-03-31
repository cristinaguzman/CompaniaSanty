import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, variant = "primary", className, disabled, ...props }) => {
  const buttonClasses = classNames(
    "px-4 py-2 rounded font-medium focus:outline-none transition",
    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
      "bg-gray-600 text-white hover:bg-gray-700": variant === "secondary",
      "bg-red-600 text-white hover:bg-red-700": variant === "danger",
      "bg-green-600 text-white hover:bg-green-700": variant === "success",
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};


export default Button;
