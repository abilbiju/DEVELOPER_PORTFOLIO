import React from "react";

export default function Loader() {
  const letters = Array.from("ABIL BIJU");

  return (
    <div className="site-loader fixed inset-0 z-[9999] flex items-center justify-center">
      <h1 className="loader-name text-4xl md:text-6xl lg:text-7xl tracking-widest font-semibold">
        {letters.map((ch, i) => (
          <span key={i} className={`loader-letter`}>{ch === " " ? "\u00A0" : ch}</span>
        ))}
      </h1>
    </div>
  );
}
