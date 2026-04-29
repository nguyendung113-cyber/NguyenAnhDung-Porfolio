import React from "react";

/**
 * Button - Reusable button component
 */
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-[#1e1f26] text-white hover:bg-[#ff4d4d]",
    secondary: "bg-[#ff4d4d] text-white hover:bg-[#e14d3d]",
    outline:
      "border-2 border-[#1e1f26] text-[#1e1f26] hover:bg-[#1e1f26] hover:text-white",
    ghost: "text-gray-400 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-black uppercase tracking-[0.15em]
    transition-all duration-300
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
