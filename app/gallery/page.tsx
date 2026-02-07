"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { useState } from "react";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "landscape", "aerial", "nature", "seascape", "urban"];
  
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
              className={`px-6 py-2 rounded-lg font-medium capitalize transition-all ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20 text-white"
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
              className="group relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-white font-medium mb-1">{image.alt}</p>
                    <span className="text-gray-300 text-sm capitalize">{image.category}</span>
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
