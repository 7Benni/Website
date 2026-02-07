"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { useMemo, useState } from "react";
import { Tag } from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set<string>(galleryImages.map(i => i.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredImages = useMemo(() => {
    return filter === "all"
      ? galleryImages
      : galleryImages.filter(img => img.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my favorite shots from around the world
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium capitalize transition-all text-sm ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-white/6 hover:bg-white/12 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative break-inside-avoid overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />

                {/* Read-only overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                  <div className="w-full p-4">
                    <div className="bg-black/40 p-3 rounded-md flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium mb-1">{image.alt}</p>
                        <span className="text-gray-300 text-sm capitalize flex items-center gap-2">
                          <Tag size={14} /> {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
