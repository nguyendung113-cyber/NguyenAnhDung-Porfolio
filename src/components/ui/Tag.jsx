import React from "react";

/**
 * Tag - Reusable tag/badge component
 */
export const Tag = ({ children, variant = "default", size = "sm" }) => {
  const variants = {
    default: "bg-[#1e1f26] text-white",
    accent: "bg-[#ff4d4d] text-white",
    outline: "border border-gray-300 text-gray-600",
  };

  const sizes = {
    xs: "text-[8px] px-1.5 py-0.5",
    sm: "text-[9px] px-2 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={`
        font-black uppercase tracking-wider
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
};

/**
 * TagGroup - Group of tags
 */
export const TagGroup = ({ tags, size = "sm" }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, index) => (
        <Tag key={index} size={size}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default { Tag, TagGroup };
