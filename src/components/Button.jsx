import React from "react";

const Button = ({ className = "", size = "default", children }) => {
  const baseClass =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 flex item-center justify-center focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClass} ${sizeClass[size] || sizeClass.default} ${className}`;

  return <button className={classes}>{children}</button>;
};

export default Button;
