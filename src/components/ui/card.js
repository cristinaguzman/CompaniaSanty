import React from "react";
import classNames from "classnames";

const Card = ({ children, className, borderColor = "border-blue-500", ...props }) => {
  return (
    <div
      className={classNames(
        "border rounded-lg shadow-md p-4 bg-white", 
        borderColor,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={classNames("p-2", className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ title, subtitle, className, ...props }) => {
  return (
    <div className={classNames("p-2 border-b", className)} {...props}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};

export { Card, CardContent, CardHeader };
