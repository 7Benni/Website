"use client";

import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isLight, setIsLight] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("site-theme");
      if (saved) {
        setIsLight(saved === "light");
        document.documentElement.classList.toggle("light", saved === "light");
      } else {
        // default: dark (no class)
        setIsLight(false);
      }
    } catch (e) {
      setIsLight(false);
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    try {
      localStorage.setItem("site-theme", next ? "light" : "dark");
      document.documentElement.classList.toggle("light", next === true);
    } catch (e) {
      // ignore
    }
  };

  if (isLight === null) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors"
    >
      {isLight ? "Light" : "Dark"}
    </button>
  );
}
