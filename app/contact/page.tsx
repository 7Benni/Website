import { Mail, Instagram, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <Link
            href="mailto:hello@visualstories.com"
            className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-start">
              <div className="p-4 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors mr-4">
                <Mail size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400 mb-2">Send me a message</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  hello@visualstories.com
                </p>
              </div>
              <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Card */}
          <Link
            href="https://www.instagram.com/benni.photographie"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-start">
              <div className="p-4 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors mr-4">
                <Instagram size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-gray-400 mb-2">Follow my work</p>
                <p className="text-white group-hover:text-pink-400 transition-colors">
                  @benni.photographie
                </p>
              </div>
              <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
