"use client";

import { Sun, Moon } from "lucide-react";
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
      className="p-2 rounded-md hover:bg-white/5 transition-colors"
    >
      {isLight ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
