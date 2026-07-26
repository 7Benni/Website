"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { useEffect, useState } from "react";
import Lightbox from "@/components/Lightbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPhotoCategoryLabel, photoCategories } from "@/data/siteContent";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = ["all", ...photoCategories.map((category) => category.key)];
  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category === null) {
      setFilter("all");
      return;
    }

    if (photoCategories.some((entry) => entry.key === category)) {
      setFilter(category);
    } else {
      setFilter("all");
    }
  }, [searchParams]);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-[1680px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-semibold mb-4">Gallery</h1>
            <p className="text-[var(--muted)] text-lg">
              A collection of favorite moments, filtered by category.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-5 py-2 rounded-md font-medium capitalize transition-all text-sm border ${
                filter === category
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
              }`}
            >
              {category === "all" ? "All" : getPhotoCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 xl:columns-3 2xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer border border-white/10 bg-white/[0.03]"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                  <div className="p-5 w-full">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[var(--foreground)] font-medium mb-2 text-lg">{image.alt}</p>
                        <span className="text-[var(--muted)] text-sm capitalize inline-flex rounded-md border border-white/10 bg-black/20 px-3 py-1 backdrop-blur-sm">
                          {getPhotoCategoryLabel(image.category)}
                        </span>
                      </div>

                    </div>

                    {image.settings && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {image.settings.aperture && (
                          <span className="bg-white/10 border border-white/10 px-2 py-1 rounded-md text-xs backdrop-blur-sm">Aperture: f/{image.settings.aperture}</span>
                        )}
                        {image.settings.shutter && (
                          <span className="bg-white/10 border border-white/10 px-2 py-1 rounded-md text-xs backdrop-blur-sm">Shutter: {image.settings.shutter}</span>
                        )}
                        {image.settings.iso && (
                          <span className="bg-white/10 border border-white/10 px-2 py-1 rounded-md text-xs backdrop-blur-sm">ISO {image.settings.iso}</span>
                        )}
                        {image.settings.focalLength && (
                          <span className="bg-white/10 border border-white/10 px-2 py-1 rounded-md text-xs backdrop-blur-sm">{image.settings.focalLength} mm</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {lightboxOpen && (
            <Lightbox
              images={filteredImages.map(i => ({ src: i.src, alt: i.alt }))}
              index={lightboxIndex}
              onClose={() => setLightboxOpen(false)}
              onChange={(newIndex) => setLightboxIndex(newIndex)}
            />
          )}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--muted)] text-lg">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
