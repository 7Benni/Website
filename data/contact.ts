import type { SocialLink } from "@/types";

export type ContactCard = {
  title: string;
  description: string;
  href: string;
  display: string;
  target?: "_blank";
  rel?: string;
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/benni.photographie", target: "_blank", rel: "noopener noreferrer" },
  { name: "Twitter", href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer" },
  { name: "GitHub", href: "https://github.com", target: "_blank", rel: "noopener noreferrer" },
  { name: "Email", href: "mailto:hello@example.com" },
];

export const contactCards: ContactCard[] = [
  {
    title: "Email",
    description: "Send me a message",
    href: "mailto:hello@visualstories.com",
    display: "hello@visualstories.com",
  },
  {
    title: "Instagram",
    description: "Follow my work",
    href: "https://www.instagram.com/benni.photographie",
    display: "@benni.photographie",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];