import React from "react";

/**
 * Card - Reusable card component
 */
export const Card = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`
        bg-white overflow-hidden shadow-xl border border-gray-100 
        flex flex-col transition-all duration-500
        ${hover ? "hover:border-[#ff4d4d]/30" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/**
 * CardImage - Image container for cards
 */
export const CardImage = ({
  src,
  alt,
  aspectRatio = "3/4",
  overlay,
  children,
}) => {
  const aspectClasses = {
    "3/4": "aspect-[3/4]",
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  };

  return (
    <div
      className={`relative h-40 sm:h-64 md:h-80 overflow-hidden shrink-0 ${aspectClasses[aspectRatio]}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-[#1e1f26]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * CardContent - Content wrapper for cards
 */
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 md:p-8 flex flex-col flex-grow ${className}`}>
      {children}
    </div>
  );
};

export default { Card, CardImage, CardContent };
