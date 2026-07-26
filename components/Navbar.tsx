"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkToggle from "@/components/DarkToggle";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/gear", label: "Gear" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--surface)] backdrop-blur-sm border-b border-[var(--border)] transition-colors duration-300">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 gap-6">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-300 transition-colors whitespace-nowrap">
            Benjamin Krause Photography
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-[var(--foreground)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <DarkToggle />
          </div>

          <button
            className="md:hidden px-3 py-2 text-sm font-medium rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                      ? "bg-white/10 text-[var(--foreground)] font-medium"
                      : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--foreground)]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
