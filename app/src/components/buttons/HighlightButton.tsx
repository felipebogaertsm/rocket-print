import React from "react";

export default function HighlightButton({ children }) {
  return (
    <div className="relative bg-black group">
      <div className="absolute -inset-1 bg-gradient-to-r gradient from-pink-600 to-violet-700 group-hover:opacity-70 rounded-lg blur opacity-50 transition-all duration-200 ease-out animate-tilt animate-glow"></div>
      <button className="w-full bg-black rounded-lg px-8 py-5 text-lg font-medium leading-none relative">
        {children}
      </button>
    </div>
  );
}
