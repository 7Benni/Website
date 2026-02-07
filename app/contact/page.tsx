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
            href="https://instagram.com"
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
                  @visualstories
                </p>
              </div>
              <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>

        {/* Additional Contact Methods */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <Mail size={24} className="mr-3" />
            <h2 className="text-2xl font-bold">Get In Touch</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400 mb-2">
                The fastest way to reach me is via email.
              </p>
              <Link
                href="mailto:hello@visualstories.com"
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all"
              >
                <Mail size={18} className="mr-2" />
                Send Email
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold mb-2">Follow On Instagram</h3>
              <p className="text-gray-400 mb-2">
                Check out my latest work and behind-the-scenes content on Instagram.
              </p>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all"
              >
                <Instagram size={18} className="mr-2" />
                Follow @visualstories
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-400">
                I typically respond to inquiries within 24-48 hours. Looking forward to collaborating with you!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-gray-400">
            <MapPin size={18} className="mr-2" />
            <span>Based in San Francisco, CA • Available Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}
