import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import { featuredCategories, heroSlides } from "@/data/siteContent";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center overflow-hidden">
        <HeroSlideshow slides={heroSlides} />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-[1800px] mx-auto">
            <div className="max-w-5xl lg:max-w-4xl lg:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-light leading-[0.88] tracking-[0.08em] text-white mb-5">
                <span className="block">Benjamin</span>
                <span className="block">Krause</span>
              </h1>

              <p className="text-base sm:text-lg uppercase tracking-[0.22em] text-white/65 mb-5">
                Wildlife, dogs, and landscape imagery
              </p>

              <p className="text-lg sm:text-xl text-white/82 mb-8 max-w-2xl">
                Capturing quiet moments and strong light with a clean, documentary feel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-7 py-3.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-all transform hover:-translate-y-0.5"
                >
                  View Gallery
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-md border border-white/20 bg-white/5 font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                {featuredCategories.map((category) => {
                  return (
                    <Link
                      key={category.key}
                      href={`/gallery?category=${category.key}`}
                      className={`group rounded-lg border border-white/10 bg-gradient-to-br ${category.accent} p-4 backdrop-blur-sm transition-transform hover:-translate-y-1`}
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{category.label}</p>
                        <p className="mt-1 text-xs text-white/70">Open the gallery</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="py-20 px-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)] mb-3">Featured work</p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">What I Do</h2>
              <p className="text-[var(--muted)] text-lg">
                A focused mix of portrait, landscape, and wildlife photography with a clean editorial finish.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
            {featuredCategories.map((category) => (
              <Link
                key={category.label}
                href={`/gallery?category=${category.key}`}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/15 block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold">{category.label}</h3>
                  </div>

                  <p className="text-[var(--muted)] leading-relaxed">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
