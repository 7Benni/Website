import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Website/images/photo9.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Camera className="mr-2" size={20} />
            <span className="text-sm font-medium">Bennis Photographie</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Bennis Photographie
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Capturing the extraordinary in everyday moments through the lens of creativity and passion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              View Gallery
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white/30 font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specializing in landscape, aerial, and nature photography with a focus on storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Dogs</h3>
              <p className="text-gray-400">
                Portraits and candid moments of dogs — capturing personality, emotion, and movement
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Nature</h3>
              <p className="text-gray-400">
                Landscapes and natural scenes — celebrating form, light, and the quiet moments in wild places
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Wildlife</h3>
              <p className="text-gray-400">
                Candid and dynamic wildlife photography — emphasizing behavior, habitat, and conservation-minded storytelling
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
