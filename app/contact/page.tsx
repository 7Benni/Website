import Link from "next/link";
import { contactCards } from "@/data/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl xl:max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-semibold mb-4">Get In Touch</h1>
            <p className="text-[var(--muted)] text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target={card.target}
              rel={card.rel}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-8 transition-all hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/15"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-start">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-[var(--muted)] mb-2">{card.description}</p>
                  <p className="text-white transition-colors group-hover:text-white/90">
                    {card.display}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
