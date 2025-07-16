import React from "react";

export function Badge({ children, className = "", variant = "", ...props }) {
  let base = "inline-block px-3 py-1 rounded-full text-xs font-semibold border ";
  let variants = {
    secondary: "bg-gray-200 text-gray-800 border-gray-300",
    outline: "bg-white text-gray-700 border-gray-300",
    default: "bg-blue-100 text-blue-800 border-blue-200",
  };
  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
}
