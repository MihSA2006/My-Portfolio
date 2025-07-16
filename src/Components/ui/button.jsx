import React from "react";

export function Button({ children, className = "", variant = "", size = "md", ...props }) {
  let base = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ";
  let variants = {
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    default: "bg-black text-white hover:bg-gray-800",
  };
  let sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`} {...props}>
      {children}
    </button>
  );
}
