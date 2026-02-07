import { Instagram, Mail, Github, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/benni.photographie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Bennis Photographie</h3>
            <p className="text-gray-400 text-sm">
              Capturing moments, creating memories
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Bennis Photographie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
