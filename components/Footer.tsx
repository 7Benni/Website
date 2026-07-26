import Link from "next/link";
import { socialLinks } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-12 mt-20 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2 tracking-tight">Benjamin Krause Photography</h3>
            <p className="text-[var(--muted)] text-sm max-w-md">
              Capturing moments, creating memories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target={social.target}
                rel={social.rel}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-[var(--foreground)]"
                aria-label={social.name}
              >
                <span>{social.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-[var(--muted)] text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Benjamin Krause Photography. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
