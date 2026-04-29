import React from "react";

/**
 * Section - Reusable section wrapper with consistent styling
 */
export const Section = ({
  children,
  id,
  className = "",
  background = "dark",
}) => {
  const bgClasses = {
    dark: "bg-[#1e1f26] text-white",
    light: "bg-[#f8f9fa] text-[#1e1f26]",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-8 md:px-20 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

/**
 * SectionHeader - Consistent section headers
 */
export const SectionHeader = ({
  title,
  subtitle,
  accentColor = "cinnabar",
}) => {
  const accentClass = {
    cinnabar: "text-[#ff4d4d]",
    olive: "text-[#778349]",
  };

  return (
    <div className="relative mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
        {title}
        <span className={accentClass[accentColor]}>.</span>
      </h2>
      <div
        className={`absolute -bottom-3 left-0 w-20 md:w-24 h-1.5 md:h-2 ${accentClass[accentColor]}`}
      ></div>
      {subtitle && (
        <p className="mt-6 md:mt-8 text-gray-400 font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default { Section, SectionHeader };
